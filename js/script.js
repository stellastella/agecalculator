function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    let hours = today.getHours() - birthDate.getHours();
    let minutes = today.getMinutes() - birthDate.getMinutes();
    let seconds = today.getSeconds() - birthDate.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}

function calculateAgeBetweenDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        months--;
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}

document.getElementById('calculateAgeBtn').addEventListener('click', function() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('ageResult').innerText = 'No date selected.';
        return;
    }
    const age = calculateAge(dob);
    document.getElementById('ageResult').innerText = `${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes, and ${age.seconds} seconds.`;
});

document.getElementById('calculateRangeBtn').addEventListener('click', function() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    if (!startDate || !endDate) {
        document.getElementById('rangeResult').innerText = 'No date selected.';
        return;
    }
    const ageBetween = calculateAgeBetweenDates(startDate, endDate);
    document.getElementById('rangeResult').innerText = `${ageBetween.years} years, ${ageBetween.months} months, ${ageBetween.days} days, ${ageBetween.hours} hours, ${ageBetween.minutes} minutes, and ${ageBetween.seconds} seconds.`;
});


// Log total number of visits to the console
function logVisitCount() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    console.log(`Total number of visits: ${visitCount}`);
}

// Call the logVisitCount function when the page loads
logVisitCount();

// function calculateAgeBetweenDates(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     let age = end.getFullYear() - start.getFullYear();
//     const monthDifference = end.getMonth() - start.getMonth();
    
//     if (monthDifference < 0 || (monthDifference === 0 && end.getDate() < start.getDate())) {
//         age--;
//     }
    
//     return age;
// }

// document.getElementById('calculate-btn').addEventListener('click', function() {
//     const dob = document.getElementById('dob-input').value;
//     const age = calculateAge(dob);
//     document.getElementById('age-result').innerText = `Your age is: ${age} years`;
// });

// document.getElementById('calculate-between-btn').addEventListener('click', function() {
//     const startDate = document.getElementById('start-date-input').value;
//     const endDate = document.getElementById('end-date-input').value;
//     const ageBetween = calculateAgeBetweenDates(startDate, endDate);
//     document.getElementById('age-between-result').innerText = `Age between dates: ${ageBetween} years`;
// });


// ///////
// document.getElementById('calculateAgeBtn').addEventListener('click', function() {
//     const dob = new Date(document.getElementById('dob').value);
//     const today = new Date();
//     const age = calculateAge(dob, today);
//     document.getElementById('ageResult').innerText = `Your age is ${age} years.`;
// });

// document.getElementById('calculateRangeBtn').addEventListener('click', function() {
//     const startDate = new Date(document.getElementById('startDate').value);
//     const endDate = new Date(document.getElementById('endDate').value);
//     const age = calculateAge(startDate, endDate);
//     document.getElementById('rangeResult').innerText = `The age between the selected dates is ${age} years.`;
// });

// function calculateAge(startDate, endDate) {
//     let age = endDate.getFullYear() - startDate.getFullYear();
//     const monthDiff = endDate.getMonth() - startDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && endDate.getDate() < startDate.getDate())) {
//         age--;
//     }
//     return age;
// }