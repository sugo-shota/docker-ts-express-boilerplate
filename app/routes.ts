import * as express from 'express';
import * as mock from './controllers/mock';

const routes = express.Router();

routes.get('/', (req, res) => res.send('Hello World!'));

routes.get('/test', mock.test);

export default routes;
