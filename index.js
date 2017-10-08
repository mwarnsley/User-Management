// Requiring in the app and modules needed
const app = require('./server/server');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Serving the main home page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

// Selecting the port for the server to listen and run on
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
