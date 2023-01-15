const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const baseUrl = process.env.PUBLIC_URL || '';
const healthPath = `${baseUrl}/health`;
const versionPath = `${baseUrl}/version`;
const app = express();

const port = process.env.SERVER_PORT || 8000;

const enableHealthCheck = () => {
  app.get(healthPath, (_, res) => {
    res.send({
      server_health: 100,
      check_type: 'HTTP',
    });
  });
};

const enableVersionCheck = () => {
  app.get(versionPath, (_, res) => {
    res.send({
      commit: `${process.env.DRONE_COMMIT}`,
    });
  });
};

const startApp = () => {
  enableHealthCheck();
  enableVersionCheck();
  app.use(express.static(path.resolve('build')));
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
};

module.exports = startApp();
