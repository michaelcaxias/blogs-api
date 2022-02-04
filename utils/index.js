const responseValidate = (status = 200, message = '', data = {}) => ({
  status,
  message,
  data,
});

module.exports = {
  responseValidate,
};