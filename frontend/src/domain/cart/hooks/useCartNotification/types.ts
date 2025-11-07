/**
 * @types useCartNotification
 * @summary Types for cart notification hook
 * @domain cart
 */

export interface CartNotificationData {
  productId: string;
  name: string;
  image: string;
  price: number;
}

export interface UseCartNotificationReturn {
  showNotification: (data: CartNotificationData) => void;
  notification: CartNotificationData | null;
  isVisible: boolean;
  hideNotification: () => void;
}
