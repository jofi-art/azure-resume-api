const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/resume', (req, res) => {
  res.json({
    name: "Jofiel Salvador",
    role: "Cloud & DevOps Engineer",
    skills: ["Azure", "Bicep", "DevOps", "GitHub Actions"],
    LinkedIn: "https://www.linkedin.com/in/jofiel-arturo-salvador-contreras-813399148/",
    Email: "jofiel21-02@outlook.es"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));
