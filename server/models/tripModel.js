const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    dates: {
        type: [Date]
    },
    journalEntry: {
        type: String
    },
    comments: {
        type: [String]
    }
    // We will use these if we have time to implement them
    // ,
    // todos: {
    //     type: String
    // },
    // weatherAdvisory: {
    //     type: String
    // }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;