const response = (statusCode, status, data, res) => {
   res.json(statusCode, {
      status,
      data,
   });
};

module.exports = response;
