import React, { useState } from "react";
import "./RestaurantForms.css";


export default function ContactDetailsForm() {
const [data, set] = useState({ phone_number: "", email: "" });


const update = (f, v) => set({ ...data, [f]: v });


const submit = async (e) => {
e.preventDefault();


await fetch("http://localhost:8000/api/restaurant/contact-details", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
});
};


return (
<div className="edit-profile-page">
<div className="edit-profile-container enhanced-card">
<h2 className="edit-profile-title">Contact Details</h2>
<form className="edit-profile-form" onSubmit={submit}>


<div className="two-col">
<div className="form-group"><label>Phone Number</label><input type="text" onChange={(e) => update("phone_number", e.target.value)} /></div>
<div className="form-group"><label>Email</label><input type="email" onChange={(e) => update("email", e.target.value)} /></div>
</div>


<button className="save-btn">Save</button>
</form>
</div>
</div>
);
}