import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";
import DataForm from "../components/DataForm";

/**
 * DataTables.jsx
 * Main page. Owns the record data, syncs it to localStorage,
 * and coordinates the table + add/edit modal.
 */
const STORAGE_KEY = "dataTablesRecords";

const defaultData = [
  {
    id: 1,
    name: "Darshil",
    email: "darshil@gmail.com",
    phone: "9876543210",
    city: "Ahmedabad",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    phone: "9876543211",
    city: "Surat",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@gmail.com",
    phone: "9876543212",
    city: "Vadodara",
    status: "Inactive",
  },
];

function loadInitialData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.error("Failed to read localStorage data:", err);
  }
  return defaultData;
}

function DataTables() {
  const [records, setRecords] = useState(loadInitialData);
  const [showForm, setShowForm] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  // Persist to localStorage whenever records change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }
  }, [records]);

  const openAddForm = () => {
    setEditingRecord(null);
    setShowForm(true);
  };

  const openEditForm = (record) => {
    setEditingRecord(record);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingRecord(null);
  };

  const handleSave = (formData) => {
    if (editingRecord) {
      // Update existing record
      setRecords((prev) =>
        prev.map((r) =>
          r.id === editingRecord.id ? { ...formData, id: editingRecord.id } : r
        )
      );
    } else {
      // Add new record with the next available ID
      const nextId =
        records.length > 0 ? Math.max(...records.map((r) => r.id)) + 1 : 1;
      setRecords((prev) => [...prev, { ...formData, id: nextId }]);
    }
    closeForm();
  };

  const handleDelete = (id) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="main-content">
        <div className="page-header">
          <h2 className="page-title">Data Tables</h2>
          <p className="page-subtitle">12.1 Make Data Tables</p>
        </div>

        <DataTable
          records={records}
          onEdit={openEditForm}
          onDelete={handleDelete}
          onAdd={openAddForm}
        />
      </main>

      <DataForm
        show={showForm}
        initialData={editingRecord}
        onSave={handleSave}
        onCancel={closeForm}
      />
    </div>
  );
}

export default DataTables;
