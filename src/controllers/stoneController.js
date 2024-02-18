const router = require('express').Router()

// const courseManager = require('../managers/courseManager')
const {getErrorMessage} = require('../utils/errorUtils')
// const {isAuth} = require('../middlewares/authMiddleware')


router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/search', (req, res) => {
    res.render('search')
})


module.exports = router