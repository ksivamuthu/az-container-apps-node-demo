const app = require('express')();
const { version } = require('./package.json');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({
    status: 'Running',
    version: version
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});