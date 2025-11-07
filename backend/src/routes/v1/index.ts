import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

/**
 * @summary V1 API router
 * @remarks External (public) routes - /api/v1/external/...
 */
router.use('/external', externalRoutes);

/**
 * @summary Internal (authenticated) routes - /api/v1/internal/...
 * @remarks Currently empty, ready for future authenticated endpoints
 */
router.use('/internal', internalRoutes);

export default router;
