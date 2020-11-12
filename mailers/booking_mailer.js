const nodeMailer = require('../config/nodemailer');
exports.newBooking = (data) => {
    console.log('inside newBooking mailer');
    let htmlString = nodeMailer.renderTempelate({data: data}, '/booking/new_booking.ejs');
    nodeMailer.transporter.sendMail({
        from: 'rohan@codeial.com',
        to: data.email,
        subject: 'Booking!',
        html: htmlString
    }, (err, info) => {
        if(err){console.log('error in sending the mail', err); return;}
        console.log('Mail Dilevered');
        return;
    });
}