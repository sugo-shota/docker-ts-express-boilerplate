import { wrap } from '../asyncWrapper';
import * as testService from '../services/test';

export const test = wrap(async (req) => {
  return await testService.test();
});
