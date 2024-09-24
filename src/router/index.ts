import express from 'express';

import authentication from './authentication';
import users from './users';
import flights from './flights';

const router = express.Router();

export default (): express.Router => {
  flights(router)
  authentication(router);
  users(router);
  return router;
};
