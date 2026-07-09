export type StudioJobStatus = "queued" | "running" | "completed" | "failed" | "dead_letter";

export interface StudioJob<TPayload = Record<string, unknown>> {
  id: string;
  name: string;
  payload: TPayload;
  status: StudioJobStatus;
  attempts: number;
  maxAttempts: number;
  runAt: string;
  createdAt: string;
  updatedAt: string;
  error?: string;
}

export interface StudioJobQueue {
  enqueue<TPayload = Record<string, unknown>>(job: Omit<StudioJob<TPayload>, "id" | "status" | "attempts" | "createdAt" | "updatedAt">): Promise<StudioJob<TPayload>>;
  list(status?: StudioJobStatus): Promise<readonly StudioJob[]>;
  moveToDeadLetter(jobId: string, error: string): Promise<void>;
  retry(jobId: string): Promise<void>;
}

function createJobId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `job-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function createMemoryStudioJobQueue(): StudioJobQueue {
  const jobs = new Map<string, StudioJob>();

  return {
    async enqueue<TPayload>(jobInput: Omit<StudioJob<TPayload>, "id" | "status" | "attempts" | "createdAt" | "updatedAt">) {
      const now = new Date().toISOString();
      const job: StudioJob<TPayload> = {
        ...jobInput,
        id: createJobId(),
        status: "queued",
        attempts: 0,
        createdAt: now,
        updatedAt: now,
      };

      jobs.set(job.id, job as StudioJob);
      return job;
    },
    async list(status) {
      const values = [...jobs.values()];
      return status ? values.filter((job) => job.status === status) : values;
    },
    async moveToDeadLetter(jobId, error) {
      const job = jobs.get(jobId);
      if (!job) return;
      jobs.set(jobId, {
        ...job,
        status: "dead_letter",
        error,
        updatedAt: new Date().toISOString(),
      });
    },
    async retry(jobId) {
      const job = jobs.get(jobId);
      if (!job) return;
      jobs.set(jobId, {
        ...job,
        status: "queued",
        attempts: job.attempts + 1,
        updatedAt: new Date().toISOString(),
      });
    },
  };
}

export interface StudioScheduler {
  schedule(jobName: string, runAt: string, payload?: Record<string, unknown>): Promise<StudioJob>;
  scheduleRecurring(jobName: string, cron: string, payload?: Record<string, unknown>): Promise<StudioJob>;
}

export interface StudioWorker {
  start(): Promise<void>;
  stop(): Promise<void>;
}
