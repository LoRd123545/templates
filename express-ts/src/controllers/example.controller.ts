import { Request, Response, NextFunction } from 'express';

import { exampleService } from '@app/services/example.service.js';

const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const examples = await exampleService.find();

    res.json(examples);
  } catch (err) {
    next(err);
  }
};
const findOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const example = await exampleService.findOne();

    res.json(example);
  } catch (err) {
    next(err);
  }
};
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const example = await exampleService.create();

    res.json(example);
  } catch (err) {
    next(err);
  }
};
const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await exampleService.update();

    res.json();
  } catch (err) {
    next(err);
  }
};
const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await exampleService.remove();

    res.json();
  } catch (err) {
    next(err);
  }
};

export const exampleController = {
  find,
  findOne,
  create,
  update,
  remove,
};
