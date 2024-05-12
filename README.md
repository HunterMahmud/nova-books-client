# BookShelf


**BookShelf** is a user-friendly online book shelf management website that is very helpful in finding your desire books and borrow to read.

**Visit the live site:** [BookShelf](https://nova-books.web.app/).

**My Category:** assignment_category_0008


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
- **3. dotenv:** Hides configuration secrets.
- **4. firebase:** Handles authentication.
- **5. react-helmet-async:** Dynamically sets page titles.
- **6. react-hook-form:** Manages forms efficiently.
- **7. react-icons:** Displays React icons.
- **8. react-simple-typewriter:** Creates typewriter effects for text.
- **9. react-toastify:** Shows toast notifications for success or failure messages.
- **10. swiper:** Implements image sliders.