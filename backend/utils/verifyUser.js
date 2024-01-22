import jwt from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js';


export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: 'No authorization header provided' });
    }
    // Split the header into "Bearer" and the token
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res
            .status(401)
            .json({ message: 'Invalid authorization header format' });
    }
    const token = parts[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, 'forbidden'))

        req.user = user;
        next();
    })

}


