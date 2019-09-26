const files = require('./files.json');

const withPayload = (payload) => (req, res, next) => {
  // simulate 5% chance to fail
  const fail = Math.floor(Math.random() * 100) + 1;

  if (fail <= 5) {
    return next('something went wrong');
  }

  // simulate 1 - 2000ms delay
  const delay = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    res.json(payload);
  }, delay);
};

exports.getFileReads = withPayload(files.file_reads);

exports.getFileWrites = withPayload(files.file_writes);
