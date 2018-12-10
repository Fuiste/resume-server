import * as Express from 'express';
import { PORT } from './environment'

// Set up a webserver for monitoring
const app = Express();
const router = Express.Router()

router.get('/status', (_, res) => {
  // Health check
  res.status(200);
  res.contentType('text/plain');
  res.send("OK");
})

app.disable('x-powered-by');
app.use(Express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log("Resume server is running :)");
})