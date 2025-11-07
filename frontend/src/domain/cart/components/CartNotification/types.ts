/**
 * @types CartNotification
 * @summary Cart notification component types
 * @domain cart
 */

export interface CartNotificationProps {
  productName: string;
  productImage: string;
  productPrice: number;
  isVisible: boolean;
  onClose: () => void;
  onGoToCart: () => void;
}
