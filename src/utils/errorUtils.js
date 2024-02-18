const mongoose = require("mongoose")

//TODO: fix the error div in main.hbs
exports.getErrorMessage = (error) => {
    let message = ''
    // console.log(error)
        if(error instanceof mongoose.MongooseError) {

                message = Object.values(error.errors).at(0).message
            
            
        } else if(error instanceof Error){
            message = error.message
        } 

        return message
}