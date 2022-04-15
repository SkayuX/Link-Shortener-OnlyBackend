import { Router } from 'express';
import ErrorRouter from './errors'
import CreateRouter from './create'
import GetRouter from './getLink'
import RedirectRouter from './redirect'

const router = Router();

router.use('/', RedirectRouter);
router.use('/', GetRouter)
router.use("/", CreateRouter)
router.use('/', ErrorRouter);

export default router;