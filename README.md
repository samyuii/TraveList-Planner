# TraveList Planner

**TraveList Planner** is a responsive React application designed to help users organize and manage their travel packing lists. The app allows users to add, edit, and delete items, categorize them, and keep track of what has been packed. It also includes a progress tracker to monitor packing completion.

## Features

- **Item Management**: Add, edit, and delete items in the packing list.
- **Manage Categories**: Organize items into categories; Add new categories or remove existing ones (default categories cannot be removed).
- **Toggle Packed Status**: Mark items as packed or unpacked.
- **Search**: Search for items by description.
- **Filter and Sort**: Items can be filtered by categories and sorted by description, packing status, or due date.
- **Local Storage**: Persist items and categories using browser local storage.
- **Responsive Design**: Fully responsive design, ensuring a seamless experience on all devices.
- **Progress Tracking**: Visual representation of packing progress, showing the percentage of packed items.

## Technologies Used

- **React**: For building the user interface and managing application state.
- **Tailwind CSS**: For styling and responsive design.
- **Local Storage**: For persisting data across sessions.

## Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/theSamyak/travelist-planner.git
   ```

2. **Navigate to the project directory**:
   ```
   cd travelist-planner
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Start the development server**:
   ```
   npm start
   ```
 This will launch the app in your default web browser at http://localhost:3000.

## Usage

### Adding Items
- Fill out the form with the item description, quantity, and select a category.
- Optionally, set a due date for the item.
- Click the "Add" button to add the item to the list.

### Editing Items
- Click the ✏️ icon next to an item to enter edit mode.
- Update the description or quantity and click "Save" to save changes.

### Deleting Items
- Click the ❌ icon next to an item to delete it from the list.

### Marking as Packed/Unpacked
- Click the "Pack"/"Unpack" button next to an item to toggle its packed status.

### Managing Categories
- Use the category dropdown to filter items by category.
- To add a new category, select "Add New Category" and enter the category name.
- To remove a category, select it from the dropdown and click the "Remove Category" button.

### Clearing the List
- Click the "Clear List" button to remove all items from the packing list. A confirmation modal will appear before the action is completed.

## Project Structure 
```scss
src/
|-- components/
|   |-- App.js               // Main component managing the overall state and layout
|   |-- Form.js              // Component for adding new items and categories
|   |-- Item.js              // Represents individual list items with options to edit, toggle, or delete.
|   |-- Logo.js              // Displays the app logo.
|   |-- Modal.js             // Modal component for confirming actions.
|   |-- PackingList.js       // Manages the display of items, including sorting and filtering.
|   |-- Progress.js          // Displays packing progress
|-- index.css                // Global styles and font imports.
|-- index.js                 // Entry point, rendering the App component
```
## Contributing

Contributions are welcome! Here's how you can contribute to TraveList Planner:

1. Fork the repository.
2. Create a new branch for your feature or bug fix (`git checkout -b feature/AmazingFeature`).
3. Make changes and test your changes locally.
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
