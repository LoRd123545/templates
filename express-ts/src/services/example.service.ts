import { exampleModel } from '@app/models/example.model.js';

const find = async () => {
  return exampleModel.find();
};
const findOne = async () => {
  return exampleModel.findOne();
};
const create = async () => {
  return exampleModel.create();
};
const update = async () => {
  return exampleModel.update();
};
const remove = async () => {
  return exampleModel.remove();
};

export const exampleService = {
  find,
  findOne,
  create,
  update,
  remove,
};
