'use strict';

const stamper = (req, res, next) => {
  let time = Date.now();
  req.time = time;
  
  console.log('time', time);
  next();
};

module.exports = stamper;
