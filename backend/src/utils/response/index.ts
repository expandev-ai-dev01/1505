/**
 * @summary Success response interface
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary List response interface
 */
export interface ListResponse<T> {
  success: true;
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
    timestamp: string;
  };
}

/**
 * @summary Creates a success response
 * @param data Response data
 * @param metadata Optional metadata
 * @returns Formatted success response
 */
export function successResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary Creates a list response with pagination
 * @param data Array of items
 * @param page Current page number
 * @param pageSize Items per page
 * @param total Total number of items
 * @returns Formatted list response
 */
export function listResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number
): ListResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary Creates an error response
 * @param message Error message
 * @param code Error code
 * @returns Formatted error response
 */
export function errorResponse(message: string, code: string = 'ERROR'): any {
  return {
    success: false,
    error: {
      code,
      message,
    },
    timestamp: new Date().toISOString(),
  };
}
