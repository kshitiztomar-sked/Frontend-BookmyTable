import React, { useState } from "react";
import "./RestaurantWizard.css"; // <-- new theme CSS
import { useNavigate } from "react-router-dom";



// NOTE: make sure these imports match how your form files export (default vs named)
import RestaurantInfoForm from "./RestaurantInfoForm";
import BankDetailsForm from "./BankDetailsForm";
import AddressDetailsForm from "./AddressDetailsForm";
import ContactDetailsForm from "./ContactDetailsForm";
import SpecificationsForm from "./SpecificationsForm";

export default function RestaurantWizard() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const navigate = useNavigate();

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const back = () => setStep((s) => Math.max(s - 1, 1));
  const goTo = (n) => setStep(() => Math.min(Math.max(n, 1), totalSteps));

  return (
    <div className="rw-page">
      {/* STEP INDICATOR */}
      <div className="rw-step-indicator" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => {
          const state = n === step ? "active" : n < step ? "done" : "idle";
          return (
            <button
              key={n}
              className={`rw-step-circle ${state}`}
              onClick={() => goTo(n)}
              aria-current={n === step}
              aria-label={`Step ${n}`}
            >
              {n}
            </button>
          );
        })}
      </div>

      {/* MAIN CARD */}
      <div className="rw-wizard-card">
        <h2 className="rw-wizard-title">Register your restaurant</h2>

        <div className="rw-form-area">
          {step === 1 && <RestaurantInfoForm />}
          {step === 2 && <BankDetailsForm />}
          {step === 3 && <AddressDetailsForm />}
          {step === 4 && <ContactDetailsForm />}
          {step === 5 && <SpecificationsForm />}
        </div>

        {/* NAVIGATION */}
        <div className="rw-wizard-footer">
          <div className="rw-wizard-buttons">
            {step > 1 ? (
              <button className="rw-btn rw-btn-back" onClick={back}>
                ⬅ Back
              </button>
            ) : (
              <div /> /* keep spacing */
            )}

            <div className="rw-btn-row">
              {step < totalSteps && (
                <button className="rw-btn rw-btn-next" onClick={next}>
                  Next ➜
                </button>
              )}

              {step === totalSteps && (
                <button
                  className="rw-btn rw-btn-submit"
                  onClick={() => {
                    alert("All forms submitted!");
                    navigate("/restaurant/dashboard"); // change to your route
                }}
                >
                  Finish ✔
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
