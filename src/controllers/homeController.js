const router = require("express").Router()
// const stoneManager = require('../managers/stoneManager')

    
router.get("/", async(req, res) => {
    // const stones =  await stoneManager.getThree().lean()
    res.render("home")
})

router.get('/404', (req, res, next) => {
    res.render('404')
})



module.exports = router