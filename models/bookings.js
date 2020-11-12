const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobileNumber:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    talkAbout:{
        type: String,
        required: true
    },
    medium:{
        type: String,
        required: true
    },
    time:{
        type: String
    },
    date:{
        type: Date,
        required: true
    },
    comments:{
        type: String
    }
},{
    timestamps: true
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
