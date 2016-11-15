/* @author: nocelo.eder@gmail.com */

module.exports.init = function (to, pdf, xml) {
    var nodemailer = require('nodemailer');

    // Transport config
    var smtpConfig = {
        host: 'smtp.server',
        port: 999,
        secure: true, // use SSL
        auth: {
            user: 'mail@sample.com',
            pass: 'passphrase'
        }
    };

    // reusable transporter 
    var transporter = nodemailer.createTransport(smtpConfig);
    var files_arr = [];

    if ( !isEmpty(pdf) ){
        var path_spl = pdf.split("/");
        var file_obj = {
            filename: path_spl[path_spl.length-1],
            path: pdf
        }
        files_arr.push(file_obj);
    }

    if ( !isEmpty(xml) ){
        var path_spl = xml.split("/");
        var file_obj = {
            filename: path_spl[path_spl.length-1],
            path: xml
        }
        files_arr.push(file_obj);
    }

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Sample" <mail@sample.com>', // sender address
        to: to, // list of receivers
        subject: 'Test', // Subject line
        html: '<b>HTML LINE</b>', // html body
        attachments: files_arr
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log('Send email error: ' + error);
            return;
        } else {
            console.log('Send email success: ' + info);
            return;    
       }
    });
};

function isEmpty(argument) {
    if (typeof argument == "undefined") return true;
    if (argument == "") return true;
    return false;
}
