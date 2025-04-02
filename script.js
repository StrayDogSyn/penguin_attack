let bodyX = 200;
let bodyY = 240;
let bodySize = 160; // Base size of the body
let eyeSize = (1/3) * (3/4 * (1/2 * bodySize)); // Initial eye size based on bodySize
let animationDuration = 45000; // Duration before reset
let startTime;

function setup() {
    createCanvas(400, 400); // Set canvas size
    startTime = millis(); // Record the start time
}

function draw() {
    background(207, 254, 255);

    // Check if the animation duration has passed
    if (millis() - startTime < animationDuration) {
        // Increment bodySize to make the penguin grow dynamically
        bodySize += 0.5;

        // Dynamically calculate sizes based on bodySize
        let bellySize = bodySize * (2/3);
        let headSize = (3/4) * bodySize;
        let faceSize = (1/2) * headSize;
        eyeSize += 1; // Increment eye size to make it grow
        let footSize = (1/5) * bodySize;

        // Draw the penguin
        fill(12, 13, 13);
        ellipse(bodyX, bodyY, bodySize, 150); // Body
        ellipse(bodyX, bodyY - 100, headSize, 90); // Head

        // Face
        fill(247, 244, 244);
        ellipse(bodyX - 20, bodyY - 100, faceSize, faceSize); // Face left
        ellipse(bodyX + 20, bodyY - 100, faceSize, faceSize); // Face right

        // Eyes
        fill(12, 13, 13);
        ellipse(bodyX - 20, bodyY - 100, eyeSize, eyeSize); // Left eye
        ellipse(bodyX + 20, bodyY - 100, eyeSize, eyeSize); // Right eye

        // Belly
        fill(247, 244, 244);
        ellipse(bodyX, bodyY + 20, bellySize, bellySize); // Belly

        // Feet
        fill(221, 250, 5);
        ellipse(bodyX - (1/6 * bodySize), bodyY + (1/2 * bodySize), footSize, footSize); // Left foot
        ellipse(bodyX + (1/6 * bodySize), bodyY + (1/2 * bodySize), footSize, footSize); // Right foot
    } else {
        // Reset the animation after 45 seconds
        bodySize = 160; // Reset body size
        eyeSize = (1/3) * (3/4 * (1/2 * bodySize)); // Reset eye size
        startTime = millis(); // Reset the timer
    }
}
