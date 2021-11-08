const isAuth = (req, res, next) => {
  if (req.user) next();
  else {
    res.json({ loggedIn: false });
  }
};

module.exports = isAuth;
