const nodemailer = require('nodemailer');
const express = require('express');
var router = express.Router();
const transporter = nodemailer.createTransport({

      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASSWORD
      }

});

/**
 * Post Contact form via nodemailer
 */
router.post('contactForm', function(req, res, next) {
    
    const mailOptions = {
    to: 'mail@jswap.com',
    from: `${req.body.name} <${req.body.email}>`,
    subject: 'Contact Form | Jswap',
    text: req.body.message
    };

    transporter.sendMail(mailOptions, (err) => {
        if(err) {
            req.flash('errors', { msg: err.message });
            return res.redirect('/contact');  // redirect
        }
        req.flash('success', { msg: 'Email has been sent successfully!' });
        res.redirect('/contact');
    });
});


module.exports = router;
