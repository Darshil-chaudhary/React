import React, { useState, useMemo } from "react";

/**
 * DataTable.jsx
 * Renders the records table with:
 *  - Search box
 *  - Status filter
 *  - Sortable columns
 *  - Pagination
 *  - Edit / Delete actions
 *  - "No data available" message
 *
 * Props:
 *  records   - array of record objects
 *  onEdit    - function(record)
 *  onDelete  - function(id)
 *  onAdd     - function() to open the add form
 */
const PAGE_SIZE = 5;

function DataTable({ records, onEdit, onDelete, onAdd }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortField, setSortField] = useState("id");
  const [sortDir, setSortDir] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null);

  // Filter + search
  const filtered = useMemo(() => {
    let result = [...records];

    if (statusFilter !== "All") {
      result = result.filter((r) => r.status === statusFilter);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.email.toLowerCase().includes(q) ||
          r.phone.toLowerCase().includes(q) ||
          r.city.toLowerCase().includes(q)
      );
    }

    return result;
  }, [records, search, statusFilter]);

  // Sort
  const sorted = useMemo(() => {
    const result = [...filtered];
    result.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();
      if (valA < valB) return sortDir === "asc" ? -1 : 1;
      if (valA > valB) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return result;
  }, [filtered, sortField, sortDir]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = sorted.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const sortIcon = (field) => {
    if (sortField !== field) return "↕";
    return sortDir === "asc" ? "↑" : "↓";
  };

  const confirmDelete = (id) => setDeleteId(id);
  const cancelDelete = () => setDeleteId(null);
  const performDelete = () => {
    onDelete(deleteId);
    setDeleteId(null);
  };

  return (
    <div className="table-card">
      <div className="table-card-header">
        <h5 className="table-card-title">Records</h5>
        <button className="btn btn-add" onClick={onAdd}>
          + Add New
        </button>
      </div>

      <div className="table-toolbar">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search by name, email, phone or city..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="form-select status-filter"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="table-responsive">
        <table className="table custom-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>ID {sortIcon("id")}</th>
              <th onClick={() => handleSort("name")}>
                Name {sortIcon("name")}
              </th>
              <th onClick={() => handleSort("email")}>
                Email {sortIcon("email")}
              </th>
              <th onClick={() => handleSort("phone")}>
                Phone {sortIcon("phone")}
              </th>
              <th onClick={() => handleSort("city")}>
                City {sortIcon("city")}
              </th>
              <th onClick={() => handleSort("status")}>
                Status {sortIcon("status")}
              </th>
              <th className="action-col">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={7} className="no-data-cell">
                  No data available
                </td>
              </tr>
            ) : (
              paginated.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.phone}</td>
                  <td>{r.city}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        r.status === "Active" ? "status-active" : "status-inactive"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button
                        className="btn btn-edit"
                        onClick={() => onEdit(r)}
                        title="Edit"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-delete"
                        onClick={() => confirmDelete(r.id)}
                        title="Delete"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {sorted.length > 0 && (
        <div className="table-footer">
          <span className="results-info">
            Showing {(safePage - 1) * PAGE_SIZE + 1}-
            {Math.min(safePage * PAGE_SIZE, sorted.length)} of {sorted.length}{" "}
            records
          </span>

          <div className="pagination-controls">
            <button
              className="btn btn-page"
              disabled={safePage === 1}
              onClick={() => setCurrentPage(safePage - 1)}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`btn btn-page ${p === safePage ? "active" : ""}`}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </button>
            ))}
            <button
              className="btn btn-page"
              disabled={safePage === totalPages}
              onClick={() => setCurrentPage(safePage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteId !== null && (
        <>
          <div className="custom-modal-backdrop" onClick={cancelDelete}></div>
          <div className="custom-modal small-modal">
            <div className="custom-modal-content">
              <div className="custom-modal-header">
                <h5 className="custom-modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cancelDelete}
                ></button>
              </div>
              <div className="custom-modal-body">
                <p>Are you sure you want to delete this record?</p>
              </div>
              <div className="custom-modal-footer">
                <button
                  className="btn btn-outline-secondary"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button className="btn btn-delete-confirm" onClick={performDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DataTable;
