const path = require('path');

module.exports = app => {

  app.get('/survey',(req, res) => {
    res.sendFile((path.join(__dirname, "../public/survey.html")));
  });

  // This use method works similarly to a default.
  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
