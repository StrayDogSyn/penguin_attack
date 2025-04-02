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

        // body
        fill(12, 13, 13);
        ellipse(bodyX, bodyY, bodySize, 150);

        // head
        ellipse(bodyX, bodyY - 100, headSize, 90);

        // face left
        fill(247, 244, 244);
        ellipse(bodyX - 20, bodyY - 100, faceSize, faceSize);

        // face right
        fill(247, 244, 244);
        ellipse(bodyX + 20, bodyY - 100, faceSize, faceSize);

        // Draw eyes (grow indefinitely)
        fill(12, 13, 13);
        ellipse(bodyX - 20, bodyY - 100, eyeSize, eyeSize);
        ellipse(bodyX + 20, bodyY - 100, eyeSize, eyeSize);

        // belly
        fill(247, 244, 244);
        ellipse(bodyX, bodyY + 20, bellySize, bellySize);

        // left foot
        fill(221, 250, 5);
        ellipse(bodyX - (1/6 * bodySize), bodyY + (1/2 * bodySize), footSize, footSize);

        // right foot
        fill(221, 250, 5);
        ellipse(bodyX + (1/6 * bodySize), bodyY + (1/2 * bodySize), footSize, footSize);
    } else {
        // Reset the animation after 45 seconds
        bodySize = 160; // Reset body size
        eyeSize = (1/3) * (3/4 * (1/2 * bodySize)); // Reset eye size
        startTime = millis(); // Reset the timer
    }
}
