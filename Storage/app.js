const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');

const app = express();

var run = process.env.RUN_STORAGE;
if(run.toLowerCase() !== 'true')
{
    console.log("The 'RUN_STORAGE' environment variable is set to " + run.toLowerCase() + ". Exiting!");
    process.exit();
}

// Dapr publishes messages with the application/cloudevents+json content-type
app.use(bodyParser.json({ type: 'application/*+json' }));

const port = 3000;

app.get('/dapr/subscribe', (_req, res) => {
  res.json([
    'rabbit'
  ]);
});

app.post('/rabbit', (req, res) => {
  console.log("Event from RabbitMQ: ")
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Node App listening on port ${port}!`));