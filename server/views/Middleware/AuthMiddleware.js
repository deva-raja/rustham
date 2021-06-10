const jwt = require('jsonwebtoken');

const authMiddleWare = (req, res, next) => {
  const admin = req.body.admin;
  if (admin) {
    jwt.verify(admin, process.env.jwtKey, (err, decodedToken) => {
      if (err) {
        return res.json({ page: 'login' });
      }
      return res.json({ page: 'admin' });
    });
  } else {
    res.json({ page: 'login' });
  }
};

module.exports = {
  authMiddleWare,
};
