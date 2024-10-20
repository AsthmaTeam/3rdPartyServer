const express = require('express');
const path = require('path');
const app = express();

// Files (HTML, CSS, JS etc.)
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// AsthmaTeam | Made with ❤ by osiem_00