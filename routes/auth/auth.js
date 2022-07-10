const router = require('express').Router();
const { signup, signin } = require('../../controller/auth/auth')

// ===================> Sign Up Route <====================
router.post('/signup', signup)

// ===================> Sign In Route <====================
router.post('/signin', signin)

module.exports = router