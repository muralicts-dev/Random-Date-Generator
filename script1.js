function generateRandomDate() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
  
    if (isNaN(startDate) || isNaN(endDate) || startDate >= endDate) {
      document.getElementById('result').innerText = "Please enter a valid date range.";
      return;
    }
  
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const dayOfWeek = randomDate.toLocaleDateString('en-US', { weekday: 'long' });
    const formattedDate = randomDate.toLocaleDateString('en-US');
  
    document.getElementById('result').innerText = `Random Date: ${formattedDate} (${dayOfWeek})`;
  }
  