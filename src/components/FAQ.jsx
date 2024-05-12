import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className=" mx-auto text-center mb-10 lg:mb-14">
       
        <h1 className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 text-gray-900 dark:text-gray-100">
        Frequently Asked Questions
      </h1>
      </div>

      <div className="mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 font-bugrasimo ">
              How do I add a book to the website?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              To add a book, navigate to the "Add Book" section on the website.
              Here, you can upload an image of the book, provide details such as
              the book's name, author, category, context, short description,
              ratings, and specify the quantity available.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 font-bugrasimo">
              Can I update the information of a book I've added?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Yes, you can update the information of a book you've added by
              going to the "Update Book" section. Here, you'll find a form where
              you can modify the details of the book, such as its name, author,
              category, context, short description, ratings, and quantity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 font-bugrasimo">
              Can I borrow the same book multiple times?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              No, you cannot borrow the same book multiple times. Once you've
              borrowed a book, it will be removed from the available books list
              until you return it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 font-bugrasimo">
              What happens if I try to borrow a book with a quantity of 0?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              If a book's quantity is 0, you won't be able to borrow it. In such
              cases, you may need to wait until the book's quantity is updated
              by the administrator.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 font-bugrasimo">
              What should I do if I encounter issues or have further questions?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              If you encounter any issues or have additional questions, feel
              free to contact the website administrator or support team. You can
              reach out to them via the provided contact information or support
              channels for assistance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 font-bugrasimo">
              What should I do if I want to return a book I've borrowed?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              If you want to return a book you've borrowed, go to your "Borrowed
              Books" section. Here, you'll see a list of books you've borrowed.
              Click on the "Return" button corresponding to the book you wish to
              return.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
