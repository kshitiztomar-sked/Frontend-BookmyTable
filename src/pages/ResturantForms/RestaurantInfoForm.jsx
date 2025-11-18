import React, { useState } from "react";
import "./RestaurantForms.css";



export default function RestaurantInfoForm() {
const [formData, setFormData] = useState({
logo_image: null,
cover_image: null,
description: "",
gst_number: "",
fssai_number: "",
});


const handleChange = (field, value) => {
setFormData({ ...formData, [field]: value });
};


const submitForm = async (e) => {
e.preventDefault();


const fd = new FormData();
Object.entries(formData).forEach(([k, v]) => fd.append(k, v));


await fetch("http://localhost:8000/api/restaurant/info", {
method: "POST",
body: fd,
});
};


return (
<div className="edit-profile-page">
<div className="edit-profile-container enhanced-card">
<h2 className="edit-profile-title">Restaurant Info</h2>
<form className="edit-profile-form" onSubmit={submitForm}>


<div className="form-group image-upload">
<label>Logo Image</label>
<input type="file" onChange={(e) => handleChange("logo_image", e.target.files[0])} />
</div>


<div className="form-group image-upload">
<label>Cover Image</label>
<input type="file" onChange={(e) => handleChange("cover_image", e.target.files[0])} />
</div>


<div className="form-group">
<label>Description</label>
<textarea className="textarea" rows="3" onChange={(e) => handleChange("description", e.target.value)} />
</div>


<div className="two-col">
<div className="form-group">
<label>GST Number</label>
<input type="text" onChange={(e) => handleChange("gst_number", e.target.value)} />
</div>


<div className="form-group">
<label>FSSAI Number</label>
<input type="text" onChange={(e) => handleChange("fssai_number", e.target.value)} />
</div>
</div>


<button className="save-btn" type="submit">Save</button>
</form>
</div>
</div>
);
}