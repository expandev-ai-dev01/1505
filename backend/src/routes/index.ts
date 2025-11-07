import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

/**
 * @summary Main API router with version management
 * @remarks Version 1 (current stable)
 */
router.use('/v1', v1Routes);

/**
 * @remarks Future versions can be added here
 * Example: router.use('/v2', v2Routes);
 */

export default router;
