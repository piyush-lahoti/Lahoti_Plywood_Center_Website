
require('zone.js/dist/zone-node');
const express = require('express');
const { join } = require('path');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { AppServerModuleNgFactory } = require('./dist/lahoti-plywood-center-server/main');

const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist', 'lahoti-plywood-center', 'browser');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
