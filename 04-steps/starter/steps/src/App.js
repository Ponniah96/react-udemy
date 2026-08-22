import React, { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // function previousHandler() {
  //   setStep((prevStep) => Math.max(prevStep - 1, 0));
  // }

  // function nextHandler() {
  //   setStep((prevStep) => Math.min(prevStep + 1, messages.length - 1));
  // }
  function previousHandler() {
    // step > 1 && setStep(step - 1);
    step > 1 && setStep((prevStep) => prevStep - 1);
  }

  function nextHandler() {
    // step < 3 && setStep(step + 1);
    step < 3 && setStep((prevStep) => prevStep + 1);

    //Reason for calling callback functions inside state setter functions: When we use the previous state value to calculate the new state value, it's important to use a callback function inside the state setter function. This ensures that we always have the most up-to-date value of the previous state, even if there are multiple state updates happening in quick succession. If we were to use the current value of the state variable directly, we might end up with stale or incorrect values, leading to unexpected behavior in our application.
    //eg: setStep(step + 1) // This may lead to stale state issues if multiple updates happen quickly.
    //setStep(step + 1) // calling consective state setter functions may lead to stale state issues if multiple updates happen quickly. Instead, we should use a callback function that takes the previous state as an argument and returns the new state value. This ensures that we always have the most up-to-date value of the previous state, even if there are multiple state updates happening in quick succession.
    //But if we use setter functions with callback functions, we can avoid stale state issues and ensure that our application behaves as expected.
    //setStep((prevStep) => prevStep + 1) // This is the correct way to update state based on the previous state value.
    //setStep((prevStep) => prevStep + 1) // This is the correct way to update state based on the previous state value.
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
        {/* what is this symbol called? It's called a multiplication sign or times symbol */}
        {/* WHat is names of this kind of symbols? These are called HTML entities. They are used to represent special characters in HTML that have a reserved meaning or cannot be easily typed on a keyboard. The &times; entity represents the multiplication sign (×) in HTML. */}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* <div className={`${step >= 0 ? "active" : ""}`}>1</div>
          <div className={`${step >= 1 ? "active" : ""}`}>2</div>
          <div className={`${step >= 2 ? "active" : ""}`}>3</div> */}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">{`Step ${step + 1}:${messages[step]}`}</p> */}
          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}
          {/* Implement general step component */}
          {/* <StepMessage step={step} /> */}
          {/* Implement step component using children prop */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            {/* Before children Prop */}
            {/* <Button
              bgColor="#7950f2"
              color="white"
              onClickEvent={previousHandler}
              text="Previous"
              emoji="👈"
            >
            </Button> */}

            <Button
              bgColor="#7950f2"
              color="white"
              onClickEvent={previousHandler}
            >
              <span>👈</span>
              Previous
              {/* How this children prop works? Whatever we were calling between component tags becomes the children prop. */}
            </Button>
            <Button bgColor="#7950f2" color="white" onClickEvent={nextHandler}>
              Next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

function Button({ bgColor, color, children, onClickEvent }) {
  console.log(children); // This will log the content passed between the Button component tags, which is accessible via the children prop.
  return (
    <button
      className="btn"
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClickEvent}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="App">
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}
