const jwt = require('jsonwebtoken');

/**
 * @name authenticateToken
 * @description Helper function to authenticate in api
 */
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(401); 

  jwt.verify(token, 'TOKEN', (err, user) => {
      if (err) return res.sendStatus(403); 
      req.user = user; 
      next();
  });
}

module.exports = authenticateToken;
