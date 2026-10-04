const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register the model
const Model = mongoose.model('trips');

// GET : /trips - List of all the trips
// Regardless of outcome, reponse must include HTML status code 
// and JSON message to the requsting client 
const tripsList = async(req, res)  => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment to show results on the console
        //console.log(q);

        if (!q){
            return res
                .status(404)
                .json(err);
        } else {
            return res
                .status(200)
                .json(q);
        }
};


// GET : /trips/:tripCode
// Regardless of outcome, reponse must include HTML status code 
// and JSON message to the requsting client 
const tripsFindByCode = async(req, res)  => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Returns one record
        .exec();

        // Uncomment to show results on the console
        //console.log(q);

        if (!q){
            return res
                .status(404)
                .json(err);
        } else {
            return res
                .status(200)
                .json(q);
        }
};

// The methods that the js exports / uses
module.exports = {
    tripsList,
    tripsFindByCode
};
