const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, cb) => {
    if (whitelist.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola papus');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('runing.. on port 3001');
});
