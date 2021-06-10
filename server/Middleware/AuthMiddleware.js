const jwt = require('jsonwebtoken');

const authMiddleWare = (req, res, next) => {
  const user = req.body.user;
  if (user) {
    jwt.verify(user, process.env.jwtKey, (err, decodedToken) => {
      if (err) {
        return res.json({ page: 'login' });
      }
      return res.json({ page: 'user' });
    });
  } else {
    res.json({ page: 'login' });
  }
};

module.exports = {
  authMiddleWare,
};
