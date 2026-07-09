import {
  studioActivities,
  studioArticles,
  studioCampaigns,
  studioChartSeries,
  studioComments,
  studioIntegrations,
  studioMedia,
  studioMetrics,
  studioNavItems,
  studioNotifications,
  studioUsers,
} from "./data";

const delay = 120;

function wait<TValue>(value: TValue): Promise<TValue> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(value), delay);
  });
}

export const studioMockServices = {
  getNavigation: () => wait(studioNavItems),
  getMetrics: () => wait(studioMetrics),
  getArticles: () => wait(studioArticles),
  getMedia: () => wait(studioMedia),
  getComments: () => wait(studioComments),
  getUsers: () => wait(studioUsers),
  getActivities: () => wait(studioActivities),
  getCampaigns: () => wait(studioCampaigns),
  getChartSeries: () => wait(studioChartSeries),
  getNotifications: () => wait(studioNotifications),
  getIntegrations: () => wait(studioIntegrations),
};
