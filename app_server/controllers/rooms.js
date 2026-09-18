var fs = require('fs');
var rooms = JSON.parse(fs.readFileSync('./data/room.json','utf8'));

/* GET Rooms view */
const room = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways", rooms, roomSelected:true});
};

module.exports = {
    room
}
