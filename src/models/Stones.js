const mongoose = require('mongoose')


const stoneSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "All fields are mandatory"],
        minLength : [2, 'Name should be at least 2 characters long']
    },
    category : {
        type: String,
        required: [true, "All fields are mandatory"],
        minLenght: [3, 'Category should be at least 3 characters long']
    },
    color:{
        type: String,
        required: [true, "All fields are mandatory"],
        minLength: [2, 'Color should be at least 2 characters long']
    },
    image:{
        type: String,
        required: [true, "All fields are mandatory"],
        match:[ /^https?:\/\//, 'Invalid url']
    },
    location:{
        type: String,
        required: [true, "All fields are mandatory"],
         minLength: [5, 'Location should be at least 5 characters long'],
         maxLength: [15, 'Location should be at maximum 15 characters long']
    },
    formula:{
        type: Number,
        required: [true, "All fields are mandatory"],
        minLength: [3, "Formula should be at least 3 characters long"],
        maxLength: [30, 'Formula should be maximum 30 characters long']
       
    },
    description:{
        type: String,
        required: [true, "All fields are mandatory"],
        min: [10, 'Description shouls be at least 10 characters long']
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }, 
    likedList:[{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
})

const Stone = mongoose.model('Stone', stoneSchema);

module.exports = Stone