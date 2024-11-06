let startDate, endDate, randomDate;

function setDateRange(range) {
  if (range === '1900-2100') {
    startDate = new Date(1900, 0, 1); // January 1, 1900
    endDate = new Date(2100, 11, 31); // December 31, 2100
  } else if (range === '1600-1900') {
    startDate = new Date(1600, 0, 1); // January 1, 1600
    endDate = new Date(1900, 11, 31); // December 31, 1900
  } else if (range === '2100-2500') {
    startDate = new Date(2100, 0, 1); // January 1, 2100
    endDate = new Date(2500, 11, 31); // December 31, 2500
  }
}

function generateRandomDate() {
  if (!startDate || !endDate) {
    document.getElementById('result').innerText = "Please select a date range.";
    return;
  }

  // Generate a random date within the selected range
  randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

  // Format date as "8 January 2021"
  const day = randomDate.getDate();
  const month = randomDate.toLocaleDateString('en-US', { month: 'long' });
  const year = randomDate.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  // Get the day of the week and wrap it in a span for styling
  const dayOfWeek = randomDate.toLocaleDateString('en-US', { weekday: 'long' });
  const highlightedDay = `<span class="highlight">${dayOfWeek}</span>`;

  // Display the result
  document.getElementById('result').innerHTML = `Random Date: ${formattedDate} (${highlightedDay})`;
}


function displayYearlyCalendar() {
  if (!randomDate) {
    document.getElementById('calendar').innerText = "Please generate a random date first.";
    return;
  }

  const year = randomDate.getFullYear();
  const calendarContainer = document.getElementById('calendar');
  calendarContainer.innerHTML = `<h2>Calendar for ${year}</h2>`;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let calendarHTML = '<div class="yearly-calendar">';

  // Loop through each month
  for (let month = 0; month < 12; month++) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    // Create a table for each month
    calendarHTML += `<div class="month"><h3>${months[month]}</h3><table>`;
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

    // Blank days at the start of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      calendarHTML += '<td></td>';
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day);
      if (currentDay.getDay() === 0 && day !== 1) {
        calendarHTML += '</tr><tr>';
      }
      calendarHTML += `<td>${day}</td>`;
    }

    // Blank days at the end of the month
    for (let i = lastDay.getDay(); i < 6; i++) {
      calendarHTML += '<td></td>';
    }

    calendarHTML += '</tr></table></div>';
  }

  calendarHTML += '</div>';
  calendarContainer.innerHTML += calendarHTML;
}
