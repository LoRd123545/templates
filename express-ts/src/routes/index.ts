import { Router } from 'express';

import { exampleRouter } from './example.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

router.use('/examples', exampleRouter);

export default router;
