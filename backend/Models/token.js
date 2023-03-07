const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
//token verifixation schema for account verification
const verficationTokenSchema = new mongoose.Schema({
    owner : {type: mongoose.Types.ObjectId,required:true,ref:"User"},
    vtoken:{type:String , require:true},
    createAt: {type:Date , expires:3600 , default:Date.now()}
})

 // if the token is modified  we will hash it 
verficationTokenSchema.pre("save",async function(next){
    if ( this.isModified("vtoken")){
        const hash = await bcrypt.hash(this.vtoken,10)
        this.vtoken = hash
    }
    next()
});
// then we compare it with the original token .
verficationTokenSchema.methods.compareToken = async(vtoken) =>{
    const result = await bcrypt.compareSync(vtoken, this.vtoken);
    return result;
};

module.exports = mongoose.model('verficationToken', verficationTokenSchema)