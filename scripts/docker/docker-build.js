const version = require('../version.js');
const sh = require('shelljs');

const imageName = 'dk-seo';

sh.exec(`docker build -t ${imageName}:latest -t ${imageName}:${version} .`);

