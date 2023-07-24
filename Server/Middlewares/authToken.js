import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const secret = process.env.SECRET;
export function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(401).send('Token not found in headers');
    } else{
        jwt.verify(token, secret,(err, user)=>{
            if(err){
                res.sendStatus(404);
            }
            req.user = user;
        });
        next();
    }
}
