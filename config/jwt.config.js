const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY

module.exports.authenticate = (req,res,next) => {
//     get the JWT from the Authorization header     WE HAVE TO CHANGE IT TO THIS IN THE FUTURE
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(' ')[1];

    jwt.verify(req.cookies.userToken, SECRET, (err, payload) => {
        if(err){
            res.status(401).json({verified:false})
        }
        else{
            console.log('Authenticated')
            req.user = payload
            next();
        }
    })
}