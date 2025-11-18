import React, { useState } from "react";
import "./RestaurantForms.css";


export default function BankDetailsForm() {
const [data, set] = useState({
account_holder_name: "",
bank_name: "",
account_number: "",
ifsc_code: "",
upi_id: "",
});


const update = (f, v) => set({ ...data, [f]: v });


const submit = async (e) => {
e.preventDefault();


await fetch("http://localhost:8000/api/restaurant/bank-details", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
});
};


return (
<div className="edit-profile-page">
<div className="edit-profile-container enhanced-card">
<h2 className="edit-profile-title">Bank Details</h2>
<form className="edit-profile-form" onSubmit={submit}>


<div className="two-col">
<div className="form-group"><label>Account Holder Name</label><input type="text" onChange={(e) => update("account_holder_name", e.target.value)} /></div>
<div className="form-group"><label>Bank Name</label><input type="text" onChange={(e) => update("bank_name", e.target.value)} /></div>
</div>


<div className="two-col">
<div className="form-group"><label>Account Number</label><input type="text" onChange={(e) => update("account_number", e.target.value)} /></div>
<div className="form-group"><label>IFSC Code</label><input type="text" onChange={(e) => update("ifsc_code", e.target.value)} /></div>
</div>


<div className="form-group"><label>UPI ID</label><input type="text" onChange={(e) => update("upi_id", e.target.value)} /></div>


<button className="save-btn">Save</button>
</form>
</div>
</div>
);
}
