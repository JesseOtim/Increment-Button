document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const incrementButton = document.getElementById('incrementButton');
    const countElement = document.getElementById('count');

    // Initialize counter
    let count = 0;

    // Function to handle button click
    function handleIncrement() {
        // Increment the counter
        count++;

        // Update the count in the HTML
        countElement.textContent = count;
    }

    // Attach the click event listener to the button
    incrementButton.addEventListener('click', handleIncrement);
});
