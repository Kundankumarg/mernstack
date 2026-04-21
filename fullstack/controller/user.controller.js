import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"



const registerUser = async(req,res) =>{
    // console.log(req.body)
    const {name,email,password} = req.body
    
    if(!name || !email || !password){

        //console.log("All fields are required")
        return res.status(400).json({
            message:"All fields are required"
        })
    }

    try {
        const existingUser = await User.findOne({email})
    
        if(existingUser){
            console.log("User already exists")
            return res.status(400).json({
                message:"User already exists"
            })
        }
        
        const user = await User.create({
            name,
            email,
            password
        })

        console.log(user);

        if(!user)
        {
            return res.status(400).json({
                message:"User not registered"
            });
        }

        
        const token = crypto.randomBytes(32).toString("hex")
        user.verificationToken = token
        await user.save()
        
        // send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT),
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
});


        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject:"Verify your email",
            html: `
                <h2>Verify Your Email</h2>
                <p>Click below link:</p>
                <a href="${process.env.BASE_URL}/api/v1/users/verify/${token}">
                Verify Email
                </a>
            `,
        };

        await transporter.sendMail(mailOption)

        res.status(201).json({
            message: "User registered Successfully",
            success: true,
        })

    } 
    catch (error) 
    {
        res.status(500).json({
            message: "USer not registered",
            error:error.message,
            success:false,
        })
    }
};

const verifyUser = async (req,res) =>{
    // get token from url
    // validate
    // find user based on token
    // if not(user nahi mila to)
    // set isVerified field to true 
    // remove verification token
    // save
    // return response 

}

export {registerUser} // ye export ko routes -> user.routes.js folder may import kare ga