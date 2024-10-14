import { Router } from 'express';

import { exampleController } from '@app/controllers/example.controller.js';

const router = Router();

router.get('/', exampleController.find);

router.get('/:id', exampleController.findOne);

router.post('/', exampleController.create);

router.patch('/:id', exampleController.update);

router.delete('/:id', exampleController.remove);

export { router as exampleRouter };
