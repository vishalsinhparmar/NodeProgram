var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'parmarvishalsinh821@gmail.com',
        pass:'#oxy712#'
    }
});
 
var mailOption = {
    from:'parmarvishalsinh821@gmail.com',
    to:"parmarvishalsinh813@gmail.com",
    subject:'sending email using Node.js',
    text:"that is way"
}

transporter.sendMail(mailOption,function(error,info){
    if(error){
         console.log(error);
    }
    else{
        console.log('email sent:'+ info.response);
    }
});
