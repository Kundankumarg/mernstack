import jwt from "jsonwebtoken";

export const isloggedIn = async (req, res, next) =>{

    try {
        console.log(req.cookies);
        let token = req.cookies?.token
        console.log("Token found: ", token ? "YES" : "NO")

        if(!token)
        {
            console.log("NO Token");
            return res.status(401).json({
                success: false,
                message: "Authentication failed Please Login with email and password"
            });
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log("decoded data: ",decoded)
        req.user = decoded;

        next();

    } catch (error) {
        console.log("Auth middleware failure");
        return res.status(500).json({
            success:false,
            message:"Internal server error"

        });
        
    }



};