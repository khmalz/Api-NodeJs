const response = (statusCode, status, data, res) => {
   res.status(statusCode).json({
      status,
      data,
   });
};

module.exports = response;
