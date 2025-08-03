import jwt from "jsonwebtoken";

//protect specfic routes
export const protect = (req, res, next) => {
    try {
        const authHeaders = req.headers.authorization;
        if (!authHeaders?.startsWith("Bearer ")) {
            return res.status(401).json({ "message": "Not authorized" });
        }
        const token = authHeaders.split(" ")[1];
        if(!token){
            return res.status(401).json({"message":"No token provided"})
        }
        try{
             jwt.verify(token,process.env.JWT_SECRET)
             next();
        }catch(e){
            return res.status(401).json({message: "Invalid token"})
        }
        

    } catch (e) {
        console.error("middleware error:", e)
        res.status(500).send("Internal server error")
    }




}