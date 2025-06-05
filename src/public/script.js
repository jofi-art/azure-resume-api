document.getElementById('loadBtn').addEventListener('click', () => {
  fetch('/resume')
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then((data) => {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      document.getElementById('output').textContent = 'Error loading resume: ' + error.message;
    });
});
