namespace NodeJS {
  interface ProcessEnv {
    DB_PORT: number;
    DB_USER: string;
    ENV: "test" | "dev" | "prod";
    MONGODB_URI: string;
  }
}
