// Starts components with Capital letters
// Close all the tags
// Handle the inline styles in a correct way
// We can use JavaScript Expressions inside JSX
// There must be one root element and you can also use React Fragments
// Be careful about keywords, use className and htmlFor
// We always have to check the Console

// import React from 'react';
import './SubscriptionForm.css';

function SubscriptionForm() {
  // JSX -> JavaScript XML

  //   const myLabelFunction = () => {
  //     return 'Enter Your Email:';
  //   };

  return (
    <>
      <h3>Subscription Form</h3>
      <form>
        <label htmlFor="email">Enter Your Email:</label>
        <input id="email" type="email" style={{ marginLeft: '10px' }} />
        <button
          type="submit"
          className="submit-btn"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default SubscriptionForm;
