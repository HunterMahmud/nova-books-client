# BookShelf


**BookShelf** is a user-friendly online book shelf management website that is very helpful in finding your desire books and borrow to read.

**Visit the live site:** [BookShelf](https://nova-books.web.app/).

**My Category:** assignment_category_0008




This project is a client-side application for Nova Books, built with React and Vite. It includes various dependencies for smooth development and deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/en/download/) (which includes npm).
- You have a Firebase project set up (for integrating Firebase services).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Porgramming-Hero-web-course/b9a11-client-side-HunterMahmud.git
   cd nova-books-client
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add your Firebase configuration keys. This file should include at least the following:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

   Replace `your_api_key`, `your_auth_domain`, etc., with your actual Firebase project configuration values.

## Usage

### Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and you can view the application in your browser at `http://localhost:5173`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist` folder.

### Previewing the Production Build

To preview the production build, run:

```bash
npm run preview
```

This will start a local server to preview the production build.

### Linting

To lint the project files, run:

```bash
npm run lint
```

This will run ESLint and check for any linting errors based on the configurations provided.

## Additional Information

### Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
- **TailwindCSS**: A utility-first CSS framework.
- **Vite**: A fast build tool for modern web projects.

### DevDependencies

- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **DaisyUI**: A plugin for TailwindCSS that provides a set of accessible and customizable components.

For a complete list of dependencies and devDependencies, refer to the `package.json` file.

### Environment Variables

Make sure to keep your `.env.local` file secure and do not commit it to version control. Use `.gitignore` to exclude it from your repository:

```plaintext
.env.local
```

## Contributing

If you have any suggestions or improvements, feel free to open an issue or submit a pull request.




### Notes:
- Replace `"https://github.com/Porgramming-Hero-web-course/b9a11-client-side-HunterMahmud.git"` with the actual URL of your repository.
- The `.env.local` file should be included in your `.gitignore` to prevent it from being committed to the repository.
- Ensure your Firebase configuration values are correctly set in the `.env.local` file.
- Adjust any additional instructions or configurations specific to your project.





**Website Features and Characteristics**

1. **Navbar:**
   - Contains website name and routes to various sections.
   - Conditional display of login,  logout, and profile picture based on user logged in or not.
   - Conditional display of "Add Books", "All Books", "Borrowed Books"  based on user login status.

   

2. **Login Page:**
   - Email and password-based login with Firebase authentication.
   - Options for login with Google.

3. **Register Page:**
   - Registration form with email, name, photoURL, and password fields.
   - Password validation with RegEx for complexity.
   - Checking min 6 length of character at least one uppercase and lowercase character.

4. **Home Page:**
   - Includes navbar, slider, Category section for category wise books, Frequently Asked Question Section, and Contact us section.
   

5. **Add Book Page:**
   - Private route accessible after login.
   - Form for adding books info with various details.
   - Redirects to login page if accessed without authentication.

6. **All Books Page:**
   - Displays all books added by users in card format.
   - Also have dropdown menu to select option for card view and table view.
   - And a button click "Show Available Books" only show the book that is available for borrow.
   - Private route accessible after login.

7. **View Details Page:**
   - Private/protected route displaying details about books info from selected category.

8. **Borrowed Books Page**
   - Private/protected route displaying user-borrowed books in a card format.
   - Card has several details with borrow date return date and a return button.
   - Return button delete the books from borrowlist and a alert message after delete.

9. **Update Page:**
   - Private route Form for updating added books details.


10. **Footer and Navbar:**
    - Persistent across all pages except 404 page.

11. **404 Not Found Page:**
    - Added for handling invalid routes.

12. **Loading and Spinner:**
    - Implemented to indicate loading state.



13. **Dark and Light Theme:**
    - Toggle button for light and dark mode for user preference.

15. **Dynamic Title and Scroll Restoration:**
    - Enhancements for better user experience.


**NPM Packages Used in the Project:**

- **1. aos:** Animates elements or components.
- **2. axios:** Manages HTTP requests (GET, POST, PATCH) and responses.
- **3. react-datepicker:** To pick date with good looking UI.
- **4. firebase:** Handles authentication.
- **5. react-helmet-async:** Dynamically sets page titles.
- **6. react-hook-form:** Manages forms efficiently.
- **7. react-icons:** Displays React icons.
- **8. react-simple-typewriter:** Creates typewriter effects for text.
- **9. react-toastify:** Shows toast notifications for success or failure messages.
- **10. swiper:** Implements image sliders.