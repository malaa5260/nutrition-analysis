# Nutrition Analysis Application

## Overview
This application allows users to input a list of ingredients, analyze their nutritional content using the Edamam API, and display a detailed nutritional breakdown including calories, fats, vitamins, and more. The application is fully responsive, making it easy to use on both desktop and mobile devices.

## Project Structure
The application is built using **Angular** and follows best practices for component-based architecture. It also uses **Angular Material** for UI components and **Flexbox** for responsive layout.

### Main Directories:
- `src/app/`: This is where the main components, services, and pipes are located.
  - **`components/`**: Contains the two main components:
    - `ingredient-input`: This component handles user input of ingredients for analysis.
    - `summary`: This component displays the nutritional breakdown and summary after ingredients are analyzed.
  - **`services/`**:
    - `nutrition.service.ts`: Handles the API calls to Edamam's Nutrition API for ingredient analysis.
  - **`pipes/`**:
    - `approximation.pipe.ts`: Used to round values for display purposes.
    - `daily-value.pipe.ts`: Calculates the percentage daily values based on the recommended daily intake (RDI).
  - **`models/`**:
    - `total-nutrition.model.ts`: Defines the structure of the total nutritional data (calories, fats, etc.).

### Key Components:
1. **Ingredient Input Component (`ingredient-input`)**: 
   - This is where users enter ingredients (e.g., "1 cup rice") to be analyzed. The user can press the analyze button once the input is provided.
   
2. **Summary Component (`summary`)**: 
   - After analyzing, the app navigates to this page where users can see the nutritional breakdown per ingredient and overall total nutrition facts.

3. **Pipes**:
   - **Approximation Pipe**: Rounds nutrient values for better readability (e.g., 1.234 -> 1.23).
   - **Daily Value Pipe**: Converts the nutritional values into daily value percentages based on the RDI (Recommended Daily Intake).

## Setup Instructions

### Prerequisites
Make sure the following are installed on your machine:
- [Node.js](https://nodejs.org/) (v12.x or higher)
- [Angular CLI](https://angular.io/cli) (v12.x or higher)

### Steps to Set Up and Run the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/malaa5260/nutrition-analysis
   cd nutrition-analysis-app
