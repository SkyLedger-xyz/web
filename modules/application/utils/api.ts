export interface ApiMethods {
  get(url: string, config?: any): Promise<Response>;
  post(url: string, data: any, config?: any): Promise<Response>;
  put(url: string, data: any, config?: any): Promise<Response>;
  delete(url: string, config?: any): Promise<Response>;
}

export const createApi = (baseUrl: string): ApiMethods => ({
  get: (url: string, config?: any) => fetch(`${baseUrl}${url}`, { ...config, method: 'GET' }),
  post: (url: string, data: any, config?: any) =>
    fetch(`${baseUrl}${url}`, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    }),
  put: (url: string, data: any, config?: any) =>
    fetch(`${baseUrl}${url}`, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (url: string, config?: any) => fetch(`${baseUrl}${url}`, { ...config, method: 'DELETE' }),
});
