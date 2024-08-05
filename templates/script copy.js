document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class .box div
    const boxes = document.querySelectorAll(".box div");

    // Function to generate a random position within the window dimensions
    function getRandomPosition() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const randomTop = Math.floor(Math.random() * (windowHeight - 60)); // Adjust 60 to fit your box height
        const randomLeft = Math.floor(Math.random() * (windowWidth - 60)); // Adjust 60 to fit your box width
        return { top: randomTop, left: randomLeft };
    }

    // Function to generate a random animation duration between 2 to 14 seconds
    function getRandomAnimationDuration() {
        return Math.floor(Math.random() * (14000 - 2000 + 1)) + 2000; // Random number between 2000 and 14000 milliseconds (2 to 14 seconds)
    }

    // Apply random position and random animation duration to each box
    function applyRandomPositions() {
        boxes.forEach(function(box) {
            const randomPosition = getRandomPosition();
            box.style.top = `${randomPosition.top}px`;
            box.style.left = `${randomPosition.left}px`;

            // Get a random animation duration
            const animationDuration = getRandomAnimationDuration();
            box.style.animationDuration = `${animationDuration / 1000}s`;

            // Set a timeout to reset position after animation duration
            setTimeout(function() {
                applyRandomPosition(box);
            }, animationDuration);
        });
    }

    // Initially apply random positions
    applyRandomPositions();

    // Apply new random positions based on animation durations
    function applyRandomPosition(box) {
        const randomPosition = getRandomPosition();
        box.style.top = `${randomPosition.top}px`;
        box.style.left = `${randomPosition.left}px`;

        // Get a random animation duration
        const animationDuration = getRandomAnimationDuration();
        box.style.animationDuration = `${animationDuration / 1000}s`;

        // Set a timeout to reset position after animation duration
        setTimeout(function() {
            applyRandomPosition(box);
        }, animationDuration);
    }

});
 