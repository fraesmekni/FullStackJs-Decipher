const mongoose = require ('mongoose')
// sponsor schema that will be found in the data base 
const SponsorSchema = new mongoose.Schema({
    user : {type: mongoose.Types.ObjectId,required:true,ref:"User"},
    entrepriseName : {type : String , required : true },
    sector : {type : String , required : true },
    descriptionSponsor : {type : String , required : true }
})
module.exports = mongoose.model('Sponsor', SponsorSchema)