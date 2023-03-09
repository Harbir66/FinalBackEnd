const authTokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }
  fetch(
    `http://${process.env.AUTH_URL}:${process.env.AUTH_PORT}/api/token/validate`,
    {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
        next();
      } else {
        res.status(response.status).json({ message: response.message });
      }
    })
    .catch((error) => {
      res.status(403).send({ message: error.message });
    });
};

module.exports = { authTokenValidation };
