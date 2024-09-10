# **Candidate Search Application**

## **Project Description**
The **Candidate Search Application** is a web application designed to search for GitHub users based on specific criteria like location and display their profiles. Users can also save and view their favorite candidates. The application interacts with the GitHub API to fetch user data and displays it in an easy-to-read format.

## **Live Demo**
You can access the live version of the app [here](https://leoreis.netlify.app/).

---

## **Table of Contents**

1. [Installation](#installation)
2. [Usage](#usage)
3. [Technologies](#technologies)
4. [Features](#features)
5. [Dependencies](#dependencies)
6. [Environment Variables](#environment-variables)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Installation**

1. Clone the repository:
    ```bash
    git clone https://github.com/Reisleo99/candidate-search-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd candidate-search-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory with the following content:
    ```makefile
    VITE_GITHUB_TOKEN=your-github-token-here
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

---

## **Usage**

1. Open your browser and go to `http://localhost:5173` to access the application.
2. Use the search functionality to find GitHub users by location or other criteria.
3. Save your favorite candidates to the **Saved Candidates** page for later reference.

---

## **Technologies**

- **React**: Frontend framework
- **Vite**: Build tool for faster and leaner development
- **TypeScript**: Type-safe JavaScript for better code quality
- **React Router**: Used for managing routing and navigation
- **Axios**: For making API requests to GitHub's API
- **CSS**: Styling the UI
- **GitHub API**: For fetching candidate/user data from GitHub

---

## **Features**

- Search for GitHub users by location or keyword
- View user details such as username, profile, and repositories
- Save favorite candidates for quick access
- Error handling for failed API requests and unauthorized access

---

## **Dependencies**

These are the major dependencies required for the project:

- **React**: `^18.x.x`
- **Vite**: `^4.x.x`
- **TypeScript**: `^5.x.x`
- **Axios**: `^1.x.x`
- **React Router**: `^6.x.x`

You can check all the dependencies in the `package.json` file.

---

## **Environment Variables**

The project requires an environment variable to be set for API authentication.

- **VITE_GITHUB_TOKEN**: A fine-grained GitHub access token for making API requests to GitHub. Set it in your `.env` file at the project root.

---

## **Contributing**

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. Please make sure to update tests as appropriate.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

**Leonardo Reis**  
Email: [leonardo.ao.reis@gmail.com](mailto:leonardo.ao.reis@gmail.com)  
GitHub: [Reisleo99](https://github.com/Reisleo99)

