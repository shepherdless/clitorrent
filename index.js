'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('trackerlist.torrent');
console.log(torrent.toString('utf8'));