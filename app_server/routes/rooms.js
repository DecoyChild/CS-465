var express = require('express');
var router = express.Router();

const ctrlRooms = require('../controllers/rooms');

router.get('/', ctrlRooms.room);

module.exports = router;