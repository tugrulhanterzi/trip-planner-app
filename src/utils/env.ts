type Env = {
  APP_URL: string;
  TIMEOUT: number;
};

let config: Env = {
  APP_URL: 'https://dev.api.tripplanner.com',
  TIMEOUT: 300000,
};

export const env = { ...config };
