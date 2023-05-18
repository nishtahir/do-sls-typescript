export {};

declare global {
  interface DoContext {
    activationId: string;
    apiHost: string;
    apiKey: string;
    deadline: number;
    functionName: string;
    functionVersion: string;
    namespace: string;
    requestId: string;
  }

  interface IDoEvent {
    __ow_headers?: Headers;
    __ow_method?: string;
    __ow_path?: string;
    http?: HTTP;
  }

  interface Headers {
    accept: string;
    "accept-encoding": string;
    authorization: string;
    "cdn-loop": string;
    "cf-connecting-ip": string;
    "cf-ipcountry": string;
    "cf-ray": string;
    "cf-visitor": string;
    "content-type": string;
    host: string;
    "user-agent": string;
    "x-forwarded-for": string;
    "x-forwarded-proto": string;
    "x-request-id": string;
  }

  interface HTTP {
    headers?: Headers;
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
    path?: string;
  }

  export interface IDoResponse<T> {
    headers?: Headers;
    statusCode?: number;
    body: T;
  }
}
