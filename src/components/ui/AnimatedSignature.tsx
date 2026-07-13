import {
  SIGNATURE_VECTOR_PATH,
  SIGNATURE_VECTOR_VIEWBOX,
} from "./signatureVectorPath";

const AnimatedSignature = () => (
  <div
    className="animated-signature-wrapper relative w-full max-w-[1360px] select-none"
    role="img"
    aria-label="Assinatura Talisson Souza"
  >
    <svg
      viewBox={SIGNATURE_VECTOR_VIEWBOX}
      className="animated-signature h-auto w-full overflow-visible text-foreground"
      aria-hidden="true"
    >
      <path
        d={SIGNATURE_VECTOR_PATH}
        fill="currentColor"
        fillRule="evenodd"
        className="animated-signature__static"
      />
    </svg>
  </div>
);

export default AnimatedSignature;
