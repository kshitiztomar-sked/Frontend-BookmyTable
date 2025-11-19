import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const UserBookings = () => {
  const [formData, setFormData] = useState({
    restaurantId: '',
    date: '',
    mealType: '',
    token: '',
    numberOfPersons: ''
  });
  const navigate = useNavigate();
  
  const [availableSeats, setAvailableSeats] = useState(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [disabledMeals, setDisabledMeals] = useState([]);
  const [showTokens, setShowTokens] = useState(false);

  const mealTimings = {
    breakfast: [
      { id: 1, label: '6am - 8am', value: 'token1', endHour: 8 },
      { id: 2, label: '8am - 10am', value: 'token2', endHour: 10 },
      { id: 3, label: '10am - 12pm', value: 'token3', endHour: 12 }
    ],
    lunch: [
      { id: 1, label: '12pm - 2pm', value: 'token1', endHour: 14 },
      { id: 2, label: '2pm - 4pm', value: 'token2', endHour: 16 },
      { id: 3, label: '4pm - 6pm', value: 'token3', endHour: 18 }
    ],
    dinner: [
      { id: 1, label: '6pm - 8pm', value: 'token1', endHour: 20 },
      { id: 2, label: '8pm - 10pm', value: 'token2', endHour: 22 },
      { id: 3, label: '10pm - 12am', value: 'token3', endHour: 24 }
    ]
  };

  const mealEndTimes = {
    breakfast: 12,
    lunch: 18,
    dinner: 24
  };

  useEffect(() => {
    checkDisabledMeals();
  }, [formData.date]);

  const checkDisabledMeals = () => {
    if (!formData.date) {
      setDisabledMeals([]);
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate.getTime() === today.getTime()) {
      const currentHour = new Date().getHours();
      const disabled = [];

      if (currentHour >= mealEndTimes.breakfast) disabled.push('breakfast');
      if (currentHour >= mealEndTimes.lunch) disabled.push('lunch');
      if (currentHour >= mealEndTimes.dinner) disabled.push('dinner');

      setDisabledMeals(disabled);
    } else {
      setDisabledMeals([]);
    }
  };

  const handleMealTypeChange = (meal) => {
    if (disabledMeals.includes(meal)) return;
    
    setFormData({
      ...formData,
      mealType: meal,
      token: ''
    });
    setShowTokens(true);
    setAvailableSeats(null);
  };

  const handleTokenSelect = (token) => {
    setFormData({
      ...formData,
      token: token
    });
    setAvailableSeats(null);
  };

  const checkAvailability = async () => {
    if (!formData.restaurantId || !formData.date || !formData.mealType || !formData.token) {
      alert('Please fill all required fields before checking availability');
      return;
    }

    setIsCheckingAvailability(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/check-availability', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     restaurantId: formData.restaurantId,
      //     date: formData.date,
      //     mealType: formData.mealType,
      //     token: formData.token
      //   })
      // });
      // const data = await response.json();
      // setAvailableSeats(data.availableSeats);

      // Simulated response for demonstration
      setTimeout(() => {
        const mockAvailableSeats = Math.floor(Math.random() * 20) + 5;
        setAvailableSeats(mockAvailableSeats);
        setIsCheckingAvailability(false);
      }, 1500);
    } catch (error) {
      console.error('Error checking availability:', error);
      setIsCheckingAvailability(false);
      alert('Failed to check availability. Please try again.');
    }
  };

  const handleProceedToMenu = () => {
    if (!formData.restaurantId || !formData.date || !formData.mealType || !formData.token || !formData.numberOfPersons) {
      alert('Please complete all fields before proceeding');
      return;
    }

    if (availableSeats === null) {
      alert('Please check availability first');
      return;
    }

    if (parseInt(formData.numberOfPersons) > availableSeats) {
      alert(`Number of persons cannot exceed available seats (${availableSeats})`);
      return;
    }

    if (parseInt(formData.numberOfPersons) < 1) {
      alert('Please enter a valid number of persons');
      return;
    }

    const payload = {
      restaurantId: formData.restaurantId,
      date: formData.date,
      mealType: formData.mealType,
      token: formData.token,
      numberOfPersons: parseInt(formData.numberOfPersons)
    };
    
    console.log('Booking Payload:', payload);
    alert('Booking data ready! Check console. In your app, use: navigate("/menu", { state: payload })');
    
    // In your actual app, uncomment this:
    navigate('/user/restaurant/:id/menu', { state: payload });
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div style={styles.bookingPage}>
      <div style={styles.bookingContainer}>
        <h1 style={styles.bookingTitle}>🍽️ Reserve Your Table</h1>
        <p style={styles.bookingSubtitle}>Book your perfect dining experience</p>

        <div style={styles.bookingForm}>
          {/* Restaurant ID */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Restaurant ID</label>
            <input
              type="text"
              style={styles.formInput}
              placeholder="Enter Restaurant ID"
              value={formData.restaurantId}
              onChange={(e) => setFormData({ ...formData, restaurantId: e.target.value })}
            />
          </div>

          {/* Date Picker */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Dining Date</label>
            <input
              type="date"
              style={styles.formInput}
              min={getTodayDate()}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value, mealType: '', token: '' })}
            />
          </div>

          {/* Meal Type Selection */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Select Meal Type</label>
            <div style={styles.mealButtons}>
              {['breakfast', 'lunch', 'dinner'].map((meal) => (
                <button
                  key={meal}
                  style={{
                    ...styles.mealBtn,
                    ...(formData.mealType === meal ? styles.mealBtnActive : {}),
                    ...(disabledMeals.includes(meal) ? styles.mealBtnDisabled : {})
                  }}
                  onClick={() => handleMealTypeChange(meal)}
                  disabled={disabledMeals.includes(meal)}
                >
                  <span style={styles.mealIcon}>
                    {meal === 'breakfast' && '🌅'}
                    {meal === 'lunch' && '☀️'}
                    {meal === 'dinner' && '🌙'}
                  </span>
                  <span style={styles.mealName}>{meal.charAt(0).toUpperCase() + meal.slice(1)}</span>
                  {disabledMeals.includes(meal) && (
                    <span style={styles.mealBadge}>Unavailable</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Time Tokens */}
          {showTokens && formData.mealType && (
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Select Time Slot</label>
              <div style={styles.tokenGrid}>
                {mealTimings[formData.mealType].map((timing) => (
                  <button
                    key={timing.id}
                    style={{
                      ...styles.tokenBtn,
                      ...(formData.token === timing.value ? styles.tokenBtnSelected : {})
                    }}
                    onClick={() => handleTokenSelect(timing.value)}
                  >
                    <span style={styles.tokenNumber}>Token {timing.id}</span>
                    <span style={styles.tokenTime}>{timing.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Check Availability */}
          {formData.token && (
            <div style={styles.formGroup}>
              <button
                style={styles.checkAvailabilityBtn}
                onClick={checkAvailability}
                disabled={isCheckingAvailability}
              >
                {isCheckingAvailability ? (
                  <>
                    <span style={styles.spinner}>⟳</span>
                    Checking...
                  </>
                ) : (
                  <>
                    <span>🔍</span>
                    Check Availability
                  </>
                )}
              </button>

              {availableSeats !== null && (
                <div style={styles.availabilityResult}>
                  <span style={styles.seatsIcon}>💺</span>
                  <span style={styles.seatsText}>Total Available Seats:</span>
                  <span style={styles.seatsCount}>{availableSeats}</span>
                </div>
              )}
            </div>
          )}

          {/* Number of Persons */}
          {availableSeats !== null && (
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Number of Persons</label>
              <input
                type="number"
                style={styles.formInput}
                placeholder="Enter number of persons"
                min="1"
                max={availableSeats}
                value={formData.numberOfPersons}
                onChange={(e) => setFormData({ ...formData, numberOfPersons: e.target.value })}
              />
              {formData.numberOfPersons && parseInt(formData.numberOfPersons) > availableSeats && (
                <p style={styles.errorText}>Cannot exceed {availableSeats} seats</p>
              )}
            </div>
          )}

          {/* Proceed Button */}
          {availableSeats !== null && formData.numberOfPersons && (
            <button
              style={styles.proceedBtn}
              onClick={handleProceedToMenu}
            >
              <span>Proceed to Menu</span>
              <span style={styles.arrow}>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  bookingPage: {
    background: 'linear-gradient(135deg, #0b132b 0%, #1a2744 100%)',
    minHeight: '100vh',
    color: '#fff',
    fontFamily: '"Poppins", sans-serif',
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookingContainer: {
    maxWidth: '700px',
    width: '100%',
    background: 'linear-gradient(145deg, #1c2331 0%, #252d3f 100%)',
    borderRadius: '20px',
    padding: '2.5rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 215, 0, 0.1)'
  },
  bookingTitle: {
    color: '#ffd700',
    fontSize: '2rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
    fontWeight: '700',
    textShadow: '0 2px 10px rgba(255, 215, 0, 0.3)',
    letterSpacing: '1px'
  },
  bookingSubtitle: {
    color: '#d1d1d1',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  bookingForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem'
  },
  formLabel: {
    color: '#ffd700',
    fontSize: '0.95rem',
    fontWeight: '600',
    letterSpacing: '0.5px'
  },
  formInput: {
    padding: '0.9rem 1.2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(255, 215, 0, 0.2)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: '"Poppins", sans-serif',
    transition: 'all 0.3s ease',
    outline: 'none'
  },
  mealButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem'
  },
  mealBtn: {
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(255, 215, 0, 0.2)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: '"Poppins", sans-serif'
  },
  mealBtnActive: {
    background: 'linear-gradient(135deg, #d4a017, #ffd700)',
    color: '#0b132b',
    border: '2px solid #ffd700',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(255, 215, 0, 0.4)'
  },
  mealBtnDisabled: {
    opacity: '0.4',
    cursor: 'not-allowed',
    background: 'rgba(100, 100, 100, 0.1)'
  },
  mealIcon: {
    fontSize: '1.8rem'
  },
  mealName: {
    fontSize: '0.9rem'
  },
  mealBadge: {
    fontSize: '0.65rem',
    background: 'rgba(255, 0, 0, 0.2)',
    padding: '2px 8px',
    borderRadius: '10px',
    marginTop: '0.2rem'
  },
  tokenGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1rem'
  },
  tokenBtn: {
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(255, 215, 0, 0.2)',
    borderRadius: '12px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    fontFamily: '"Poppins", sans-serif'
  },
  tokenBtnSelected: {
    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(102, 20, 180, 0.3))',
    border: '2px solid rgba(138, 43, 226, 0.8)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(138, 43, 226, 0.4)'
  },
  tokenNumber: {
    color: '#ffd700',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  tokenTime: {
    color: '#d1d1d1',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  checkAvailabilityBtn: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(90deg, #2a2a72, #009ffd)',
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: '"Poppins", sans-serif'
  },
  spinner: {
    display: 'inline-block',
    animation: 'spin 1s linear infinite'
  },
  availabilityResult: {
    marginTop: '1rem',
    padding: '1.2rem',
    background: 'rgba(0, 255, 128, 0.1)',
    border: '2px solid rgba(0, 255, 128, 0.3)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    animation: 'fadeIn 0.5s ease'
  },
  seatsIcon: {
    fontSize: '1.5rem'
  },
  seatsText: {
    color: '#d1d1d1',
    fontSize: '0.95rem'
  },
  seatsCount: {
    color: '#00ff80',
    fontSize: '1.5rem',
    fontWeight: '700'
  },
  errorText: {
    color: '#ff4444',
    fontSize: '0.85rem',
    marginTop: '0.3rem'
  },
  proceedBtn: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #d4a017, #ffd700)',
    border: 'none',
    borderRadius: '12px',
    color: '#0b132b',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '1rem',
    fontFamily: '"Poppins", sans-serif'
  },
  arrow: {
    fontSize: '1.3rem',
    transition: 'transform 0.3s ease'
  }
};

export default UserBookings;