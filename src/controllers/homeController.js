const router = require("express").Router()
// const stoneManager = require('../managers/stoneManager')

    
router.get("/", async(req, res) => {
    // const stones =  await stoneManager.getThree().lean()
    res.render("home")
})



module.exports = router