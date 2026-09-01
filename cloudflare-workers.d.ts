declare module "cloudflare:workers" {
  export const env: {
    DB?: D1Database;
    ASSETS?: Fetcher;
    [key: string]: unknown;
  };
}

declare interface Fetcher {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

declare interface D1Database {
  prepare(query: string, ...params: unknown[]): {
    first<T = unknown>(...args: unknown[]): Promise<T | null>;
    run(...args: unknown[]): Promise<{ success: boolean; meta: unknown }>;
    all<T = unknown>(...args: unknown[]): Promise<T[]>;
    raw<T = unknown>(...args: unknown[]): Promise<T[]>;
  };
  dump(): Promise<unknown>;
  exec(query: string): Promise<{ count?: number; duration?: number }>; 
}
