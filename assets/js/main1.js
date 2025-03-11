document.addEventListener("DOMContentLoaded", function() {
    const numbers = document.querySelectorAll('.number, .number1'); // Select both number classes
    const svgEls = document.querySelectorAll('svg circle');
    const counters = Array(numbers.length).fill(0);
    const intervals = Array(numbers.length);

    numbers.forEach((number, index) => {
        // Store the interval ID in the intervals array
        intervals[index] = setInterval(() => {
            if (counters[index] === parseInt(number.dataset.num)) {
                clearInterval(intervals[index]); // Clear the correct interval
            } else {
                counters[index] += 1;
                number.innerHTML = counters[index] + "%";

                // Calculate the strokeDashoffset based on the percentage
                const radius = 60; // Circle radius
                const circumference = 2 * Math.PI * radius; // Circumference of the circle
                const offset = circumference - (counters[index] / 100 * circumference); // Calculate offset

                svgEls[index].style.strokeDasharray = `${circumference} ${circumference}`;
                svgEls[index].style.strokeDashoffset = offset;
            }
        }, 20);
    });
});