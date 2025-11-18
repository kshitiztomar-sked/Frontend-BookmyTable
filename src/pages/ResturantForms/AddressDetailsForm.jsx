import React, { useState } from "react";
import "./RestaurantForms.css";


export default function AddressDetailsForm() {
const [data, set] = useState({
country: "",
state: "",
city: "",
pincode: "",
address_line_1: "",
address_line_2: "",
email: "",
latitude: "",
longitude: "",
});


const update = (f, v) => set({ ...data, [f]: v });


const submit = async (e) => {
e.preventDefault();


await fetch("http://localhost:8000/api/restaurant/address-details", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
});
};


return (
<div className="edit-profile-page">
<div className="edit-profile-container enhanced-card">
<h2 className="edit-profile-title">Address Details</h2>
<form className="edit-profile-form" onSubmit={submit}>


<div className="three-col">
<div className="form-group"><label>Country</label><input type="text" onChange={(e) => update("country", e.target.value)} /></div>
<div className="form-group"><label>State</label><input type="text" onChange={(e) => update("state", e.target.value)} /></div>
<div className="form-group"><label>City</label><input type="text" onChange={(e) => update("city", e.target.value)} /></div>
</div>


<div className="two-col">
<div className="form-group"><label>Pincode</label><input type="text" onChange={(e) => update("pincode", e.target.value)} /></div>
<div className="form-group"><label>Email</label><input type="email" onChange={(e) => update("email", e.target.value)} /></div>
</div>


<div className="form-group"><label>Address Line 1</label><input type="text" onChange={(e) => update("address_line_1", e.target.value)} /></div>
<div className="form-group"><label>Address Line 2</label><input type="text" onChange={(e) => update("address_line_2", e.target.value)} /></div>


<div className="two-col">
<div className="form-group"><label>Latitude</label><input type="number" step="0.00001" onChange={(e) => update("latitude", e.target.value)} /></div>
<div className="form-group"><label>Longitude</label><input type="number" step="0.00001" onChange={(e) => update("longitude", e.target.value)} /></div>
</div>


<button className="save-btn">Save</button>
</form>
</div>
</div>
);
}