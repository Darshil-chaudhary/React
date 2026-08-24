# Data Tables — React Admin Dashboard Page

## File placement

```
data-tables-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── Sidebar.jsx
    │   ├── DataTable.jsx
    │   └── DataForm.jsx
    └── pages/
        └── DataTables.jsx
```

## Setup

1. Create the project folder and copy every file above into the matching path
   (or run `npm create vite@latest data-tables-app -- --template react` and
   overwrite the generated files with the ones provided).
2. Install dependencies:
   ```
   cd data-tables-app
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`).

## Notes

- Bootstrap 5 is imported globally in `App.jsx` (`import "bootstrap/dist/css/bootstrap.min.css"`)
  for grid/utility classes and form controls. No Bootstrap JavaScript/jQuery is used —
  the Add/Edit and Delete-confirm modals are built as plain React components controlled
  with `useState`, styled in `App.css`.
- All CRUD data is persisted to `localStorage` under the key `dataTablesRecords`, so
  records survive a page refresh. Clearing the browser's localStorage resets the table
  back to the three sample rows (Darshil, Rahul, Priya).
- Table features implemented in `DataTable.jsx`: search (name/email/phone/city),
  status filter, click-to-sort column headers, pagination (5 rows/page), and a
  "No data available" empty state.
- The sidebar in `Sidebar.jsx` reproduces the reference layout: `12 Data Tables` as
  the active light-pink row with `12.1 Make Data Tables` beneath it.
- Fully responsive: sidebar stacks above the content on tablet/mobile, the table
  scrolls horizontally on narrow screens, and the modal form goes full-width.
