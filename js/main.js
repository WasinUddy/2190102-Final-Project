// Define constants for API key and URL
const API_KEY = "UWv3mHahqeYAeSmA9808ydvFrva11ywbdVletsQk";
const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=" + API_KEY;

/**
 * Fetches and displays a random image from Mars Rover API.
 * 
 * @param {number} sol - The Martian sol (day) to fetch the images from.
 * @param {string} camera - The camera type to fetch images from.
 */
async function setImage(sol, camera) {
    const url = API_URL + "&sol=" + sol + "&camera=" + camera;
    const response = await fetch(url); // Fetch data from API
    const data = await response.json(); // Convert response to JSON
    
    // Count the number of images received
    const count = data.photos.length;
    const element = document.getElementById("output-picture");

    // Handle case with no images
    if (count === 0) {
        element.style.backgroundImage = "none"; // Clear previous image
        // Display a 'no photography' icon if no images are available
        element.innerHTML = "<span class='material-symbols-outlined'>no_photography</span>";
    } else {
        console.log("Found " + count + " images");

        // Select a random image from the list
        const random = Math.floor(Math.random() * count);
        const img = data.photos[random].img_src;

        // Update the background image and clear any previous content
        element.style.backgroundImage = "url('" + img + "')";
        element.innerHTML = "";
    }
}

// Initial call to setImage when the script loads
setImage(1000, "FHAZ");

// Event Listener for DOM Content Loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Initial image set on page load
    setImage(1000, "FHAZ");

    // Event listener for the query button
    const queryButton = document.getElementById('submit-btn');
    queryButton.addEventListener('click', function() {
        // Fetching user inputs for rover camera and sol
        const roverCam = document.getElementById('rover-cam').value;
        const roverSol = document.getElementById('rover-sol').value;

        // Validate the roverSol value
        if(roverSol < 0 || roverSol > 1000) {
            alert("Rover Sol must be between 0 and 1000");
            return;
        }

        // Fetch and display image based on user inputs
        setImage(roverSol, roverCam);
    });
});
