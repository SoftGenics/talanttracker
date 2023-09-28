var fs = require('fs');



exports.test=(req,res)=>{

    var readStream = fs.createReadStream('C:\Users\PC\Desktop\header.txt');

    /*Write to the console when the file is opened:*/
    readStream.on('open', function () {
      console.log('The file is open');
    });
    res.end();

}
