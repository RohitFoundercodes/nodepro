const jwt = require('jsonwebtoken');
exports.generate = (payload)=>jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:'7d'});
