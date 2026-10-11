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

const tripsAddTrip = async(req,res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description

    });

    const q = await newTrip.save();

        if(!q)
        {
            return res
                .status(400)
                .json(err);
        }else{
            return res
                .status(201)
                .json(q);
        }
        // console.log(q)
}


const tripsUpdateTrip = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);
    const q = await Model
        .findOneAndUpdate(
            { 'code' : req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();
        
        if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return resulting updated trip
            return res
                .status(201)
                .json(q);
        }
// Uncomment the following line to show results of operation
// on the console
// console.log(q);
};


// The methods that the js exports / uses
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
