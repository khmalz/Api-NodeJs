const response = (statusCode, message, data, res) => {
   res.status(statusCode).json({
      status: message,
      data,
   });
};

module.exports = response;
