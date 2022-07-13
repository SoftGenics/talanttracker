const mongoose = require('mongoose');
const connectdb=async() =>{
    try{
        const con=await mongoose.connect(process.env.MONGO_URL,{
        
            useUnifiedTopology: true,
                      useNewUrlParser:true,
            
         // useFindAndModify:false,
      //  useCreateIndex:true
        
        })
            console.log("connected");
    }
    catch(err){
        console.log(err);
        process.exit(1);

    }
}
module.exports= connectdb