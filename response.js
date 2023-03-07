const response = (status, msg, res) => {
   res.json(status, {
      data: msg,
   });
};

module.exports = response;
