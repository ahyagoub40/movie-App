const bcrypt = require('bcryptjs');

export const hashPassword = (password) => (
  bcrypt.hashSync(password, 10)
);

export const validatePassword = (password) => (
  bcrypt.compareSync(password, hashPassword(password))
);