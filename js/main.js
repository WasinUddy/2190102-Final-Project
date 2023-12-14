document.addEventListener('DOMContentLoaded', () => {
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
