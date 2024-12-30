# Project Name: Baacumen Assignment

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/selambeyu/baacumen-test.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd baacumen-test
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up the database:**

   - Create a `.env` file in the root directory and add your database configuration:
     ```
     DATABASE_URL=your_database_url
     ```
   - Run the Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features and Functionalities

- **Feature 1:** Display a list of user cards with basic information.
- **Feature 2:** Search and Filter.
- **Feature 3:** Detailed User View.
- **Feature 4:** User list Pagination.
- **Feature 5:** light and dark mode toggling.
- **Feature 6:** Description of feature 3.

## Additional Tools and Libraries

- **Next.js:** The React framework for production.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
