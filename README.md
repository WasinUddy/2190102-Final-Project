# Project Report: MarsWatcher

## Introduction
**MarsWatcher** is an interactive web application that provides users with real-time images and information about Mars, using data from NASA's Mars rovers. This project, developed for the 2190102 Final Project, aims to create an engaging educational tool for space enthusiasts and students.

## Project Overview
MarsWatcher allows users to interactively select a Mars rover, choose a camera, and specify a Martian sol (Martian solar day) to view images captured by the rover. The application is designed to be user-friendly and informative, making space exploration more accessible to the public.

### Technologies Used
- HTML
- CSS
- JavaScript
- NASA Mars Rover Photos API
- GitHub Pages and GitHub Actions for CI/CD

## Implementation Details

### Web Page Structure
The [`index.html`](https://github.com/WasinUddy/2190102-Final-Project/blob/main/index.html) file establishes the web application's structure, featuring:
- Dropdown menus for selecting Mars rovers and cameras.
- An input field for the Martian sol.
- An iframe for displaying 3D models of the rovers.
- A display section for the images fetched from the API.

### Styling
The [`style.css`](https://github.com/WasinUddy/2190102-Final-Project/blob/main/css/style.css) file contains:
- Layout and styling for the web page.
- Responsive design elements for device compatibility.
- Interactive element styles like buttons and dropdowns.

### JavaScript Functionality
The [`main.js`](https://github.com/WasinUddy/2190102-Final-Project/blob/main/js/main.js) script includes:
- Event listeners for user interaction.
- Integration with NASA's Mars Rover Photos API.
- Dynamic updates of the webpage with fetched images.

## NASA Mars Rover Photos API
The MarsWatcher application utilizes the NASA Mars Rover Photos API, maintained by Chris Cerami. This API provides a collection of Mars rover photos, making it possible to access images based on specific criteria like rover name, camera type, and Martian sol. The API's extensive database and reliability have been crucial in the development of MarsWatcher.

## Available Rover Cameras
Each Mars rover is equipped with a unique set of cameras, offering different perspectives of the Martian surface. The following table outlines the available cameras for each rover:

| Rover Name  | Available Cameras |
|-------------|-------------------|
| Curiosity   | FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM |
| Opportunity | FHAZ, RHAZ, NAVCAM, PANCAM, MINITES |
| Spirit      | FHAZ, RHAZ, NAVCAM, PANCAM, MINITES |

## CI/CD Pipeline
The MarsWatcher application is hosted on GitHub Pages, with a CI/CD pipeline implemented using GitHub Actions. The pipeline is triggered by a push to the `main` branch of the GitHub repository, to start deploying static HTML, CSS, and JavaScript files to a GitHub Pages site(https://wasinuddy.github.io/2190102-Final-Project/). As the project does not require any self-hosted servers or databases, GitHub Pages provides a simple and convenient solution for hosting the application.

## Acknowledgements
I would like to extend my sincere gratitude to Asst. Prof. Sukree Sinthupinyo, Ph.D., for his invaluable guidance and support throughout the course. His expertise and insights have been instrumental in the successful completion of this project.