const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/resume', (req, res) => {
  res.json({
    name: "John Doe",
    role: "Cloud Engineer",
    skills: ["Azure", "Bicep", "DevOps", "GitHub Actions"]
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));
