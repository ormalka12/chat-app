var jwt = require('jsonwebtoken');
const config = require("../config/config");

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
   jwt.verify(token, config.secretkey, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    next();
  });
}

module.exports = verifyToken;