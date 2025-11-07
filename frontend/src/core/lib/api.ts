import axios, { AxiosInstance } from 'axios';

/**
 * @configuration apiConfig
 * @summary Central API configuration
 * @type api-configuration
 * @category core-library
 */
export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  version: import.meta.env.VITE_API_VERSION || 'v1',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),

  get externalUrl(): string {
    return `${this.baseUrl}/api/${this.version}/external`;
  },

  get internalUrl(): string {
    return `${this.baseUrl}/api/${this.version}/internal`;
  },
};

/**
 * @client publicClient
 * @summary Axios client for PUBLIC API endpoints
 * @type http-client
 * @category core-library
 */
export const publicClient: AxiosInstance = axios.create({
  baseURL: apiConfig.externalUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * @client authenticatedClient
 * @summary Axios client for AUTHENTICATED API endpoints
 * @type http-client
 * @category core-library
 */
export const authenticatedClient: AxiosInstance = axios.create({
  baseURL: apiConfig.internalUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});
