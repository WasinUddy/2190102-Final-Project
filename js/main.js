document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-btn').addEventListener('click', fetchRoverPhotos);
    const roverSelect = document.getElementById('rover-name');
    const camera = document.getElementById('rover-cam');
    roverSelect.addEventListener('change', (event) => {
        if (event.target.value=="curiosity") {
            const rover3d = document.getElementById('rover-3d');
            rover3d.setAttribute('src', 'https://mars.nasa.gov/gltf_embed/24584');            
            camera.innerHTML = `
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="MAST">Mast Camera</option>
                <option value="CHEMCAM">Chemistry and Camera Complex</option>
                <option value="MAHLI">Mars Hand Lens Imager</option>
                <option value="MARDI">Mars Descent Imager</option>
                <option value="NAVCAM">Navigation Camera</option>
            `;            

        } else if (event.target.value=="opportunity") {
            const rover3d = document.getElementById('rover-3d');
            rover3d.setAttribute('src', 'https://mars.nasa.gov/gltf_embed/24883');

            camera.innerHTML = `
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="NAVCAM">Navigation Camera</option>
                <option value="PANCAM">Panoramic Camera</option>
                <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
            `; 

        } else if (event.target.value=="spirit") {
            const rover3d = document.getElementById('rover-3d');
            rover3d.setAttribute('src', 'https://mars.nasa.gov/gltf_embed/24883');

            camera.innerHTML = `
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="NAVCAM">Navigation Camera</option>
                <option value="PANCAM">Panoramic Camera</option>
                <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
            `; 

        }
    });
});


async function fetchRoverPhotos() {
    const roverName = document.getElementById('rover-name').value;
    const camera = document.getElementById('rover-cam').value;
    const sol = document.getElementById('rover-sol').value;

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.photos);

    if (data.photos.length === 0) {
        console.log('No photos found');
        const outputContainer = document.getElementById('output-picture');
        
        // Set background image
        outputContainer.style.backgroundImage = "none";
        outputContainer.innerHTML = "<span class='material-symbols-outlined'>no_photography</span>"
    } else {
        // Get random photo
        const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];
        
        // Set background image
        const outputContainer = document.getElementById('output-picture');
        outputContainer.innerHTML = "";
        outputContainer.style.backgroundImage = `url(${randomPhoto.img_src})`;
    }
}
