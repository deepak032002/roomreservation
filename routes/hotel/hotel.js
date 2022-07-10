const router = require('express').Router();
const { getHotel } = require('../../controller/hotel/hotel')

router.post('getHotel', getHotel)

module.exports = router