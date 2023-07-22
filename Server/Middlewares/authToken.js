import jwt from 'jsonwebtoken';
export const secret = "sdskfhouwgrguo2u1487tfeiqg*EQ&";
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
