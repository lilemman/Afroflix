const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  console.log(req.headers.authorization);

  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Invalid Token");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Unauthorized user");
  }
};

module.exports = verify;
