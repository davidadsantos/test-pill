interface EnvironmentVariables {
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: string;
  OPENAI_API_KEY: string;
  OPENAI_MODEL: string;
}

const env: EnvironmentVariables = process.env as unknown as EnvironmentVariables;

export function getEnv(key: keyof EnvironmentVariables): string {
  return env[key];
}