const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required : true,
    },
    admin : {
        type : Boolean
    }
})


module.exports = mongoose.model('User', userSchema);

// const userSchema = new mongoose.Schema({
//     Name : {
//         type : String,
//         required : true
//     },
//     email : {
//         type : String,
//         required : true,
//         unique : true
//     },
//     password : {
//         type : String,
//         required : true
//     },
//     admin : {
//         type : Boolean
//     }
// })

// userSchema.pre('save',function(next){
//     const user = this;
//     if(!user.isModified('password')){
//         return next()
//     }
//     bcrypt.genSalt(10,(err,salt) => {
//         if(err){
//             return next(err)
//         }
//         bcrypt.hash(user.password,salt,(err,hash)=> {
//             if(err){
//                 return next(err)
//             }
//             user.password = hash;
//             next()
//         })
//     })
// })

// userSchema.methods.comparePassword = function(candidatePassword) {
//     const user = this
//     return new Promise((resolve,reject) => {
//         bcrypt.compare(candidatePassword,user.password,(err,isMatch)=> {
//             if(err){
//                 return reject(err)
//             }
//             if(!isMatch){
//                 return reject(err)
//             }
//             resolve(true)
//         })
//     })
// }


// mongoose.model('User',userSchema)