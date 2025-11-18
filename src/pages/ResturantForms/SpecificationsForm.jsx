import React, { useState } from "react";
import "./RestaurantForms.css";


export default function SpecificationsForm() {
  const [data, set] = useState({
    open_time: "",
    close_time: "",
    no_of_seats: "",
    garden_space: false,
    image: null,
  });

  const update = (field, value) => set({ ...data, [field]: value });

  const submit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => fd.append(k, v));

    await fetch("http://localhost:8000/api/restaurant/specifications", {
      method: "POST",
      body: fd,
    });
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container enhanced-card">
        <h2 className="edit-profile-title">Specifications</h2>

        <form className="edit-profile-form" onSubmit={submit}>
          {/* Row 1 */}
          <div className="two-col">
            <div className="form-group">
              <label>Open Time</label>
              <input
                type="time"
                value={data.open_time}
                onChange={(e) => update("open_time", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Close Time</label>
              <input
                type="time"
                value={data.close_time}
                onChange={(e) => update("close_time", e.target.value)}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="two-col">
            <div className="form-group">
              <label>No. of Seats</label>
              <input
                type="number"
                placeholder="Enter total seating capacity"
                value={data.no_of_seats}
                onChange={(e) => update("no_of_seats", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Garden Space</label>
              <select
                value={data.garden_space}
                onChange={(e) => update("garden_space", e.target.value === "true")}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div className="form-group image-upload">
            <label>Restaurant Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => update("image", e.target.files[0])}
            />
          </div>

          <button className="save-btn" type="submit">Save Specifications</button>
        </form>
      </div>
    </div>
  );
}
