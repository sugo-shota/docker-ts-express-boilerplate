import * as express from 'express';
import routes from './routes';
import * as cors from 'cors';

const app = express();
const port = 3000;

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    // exposedHeaders: [],
    allowedHeaders: ['*'],
  })
);

app.use('/', routes);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).json({ error: 'Requested Path Not Found.' });
  }
);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
