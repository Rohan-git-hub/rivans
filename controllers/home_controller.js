const Booking = require('../models/bookings');
const bookingMailer = require('../mailers/booking_mailer');
module.exports.home = function(req, res) {
    return res.render('home.ejs', {
        title: 'Rivans'
    });
}
module.exports.covid = function(req, res) {
    return res.render('covid.ejs', {
        title: 'Well-Heard || Covid-19'
    });
}
module.exports.about = function(req, res) {
    return res.render('about.ejs',{
        title: 'Well-Heard || About Us'
    });
}
module.exports.depression = function(req, res) {
    return res.render('depression.ejs', {
        title: 'Well-Heard || Depression'
    });
}
module.exports.relationships = function(req, res) {
    return res.render('relationships.ejs',{
        title: 'Well-Heard || Relationships'
    })
}
module.exports.stressAndAnxiety = function(req, res) {
    return res.render('sanda.ejs', {
        title: 'Stress & Anxiety'
    });
}
module.exports.workStress = function(req, res) {
    return res.render('work-stress.ejs', {
        title: 'Well-Heard || Work Stress'
    });
}
module.exports.individuals = function(req, res) {
    return res.render('individual-services.ejs', {
        title: 'Well-Heard || For Individuals'
    });
}
module.exports.corporates = function(req, res){
    return res.render('corporates.ejs', {
        title: 'Well-Heard || For Corporates'
    });
}
module.exports.DIY = function(req, res) {
    return res.render('diy.ejs', {
        title: 'Well-Heard || DO It Yourself'
    });
}
module.exports.blogs = function(req, res) {
    return res.render('blog.ejs', {
        title: 'Well-Heard || Blogs'
    });
}
module.exports.blogMental = function(req, res) {
    return res.render('mhgc.ejs', {
        title: 'Blogs ||  Mental Health: The Real Game Changer'
    });
}
module.exports.blogMental2 = function(req, res) {
    return res.render('blog2.ejs', {
        title: 'Blogs ||  Developing perceptions: From conception to teenage'
    });
}
module.exports.blogMental3 = function(req, res) {
    return res.render('blog3.ejs', {
        title: 'Blogs ||  Healing Relationships'
    })
}
module.exports.bookASession = function(req, res) {
    return res.render('book.ejs', {
        title: 'Well-Heard || Book A Session'
    });
}
module.exports.booking = function(req, res) {
    console.log(req.body);
    Booking.create({
        fullName: req.body.name,
        mobileNumber: req.body.number,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city,
        gender: req.body.gender,
        talkAbout: req.body.talkAbout,
        medium: req.body.medium,
        time: req.body.time,
        date: req.body.date,
        comments: req.body.comments
    },function(err, newBooking){
        if(err){
            console.log('error', err);
            return;
        }
        console.log('*******************', newBooking);
        return res.redirect('back');
    });
    var data = req.body;
    bookingMailer.newBooking(data);
}