/**
 * @hook useCartNotification
 * @summary Manages cart notification display
 * @domain cart
 * @type domain-hook
 * @category ui
 */

import { useState, useCallback, useEffect } from 'react';
import type { UseCartNotificationReturn, CartNotificationData } from './types';

const NOTIFICATION_DURATION = 3000;

export const useCartNotification = (): UseCartNotificationReturn => {
  const [notification, setNotification] = useState<CartNotificationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = useCallback((data: CartNotificationData) => {
    setNotification(data);
    setIsVisible(true);
  }, []);

  const hideNotification = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setNotification(null), 300);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideNotification();
      }, NOTIFICATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hideNotification]);

  return {
    showNotification,
    notification,
    isVisible,
    hideNotification,
  };
};
