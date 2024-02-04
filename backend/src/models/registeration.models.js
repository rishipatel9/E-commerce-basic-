import mongoose,{Schema} from "mongoose";   

const registerSchema = new Schema(
    {
        fullName:{
            type:string,
            require:true,
            unique:false,
        },
        userName:{
            type:String,
            require:true,
            unique:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        phoneNumber:{
            type:Number,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true,
            unique:false
        },
        gender:{
            type:String,
            require:true,
        }
    },
    {
        timestamps:true
    }
)
export const Register = mongoose.model("Register",registerSchema);