import React, { useState } from "react";
import validator from "validator";
import Button from "./Button";

function EmailForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validator.isEmail(email);
    if (validation) {
      setEmailError("");
      setIsValid(true);
    } else {
      setEmailError("Valid email required");
      setIsValid(false);
    }
    onSuccess(validation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 mb-6">
        <div className="text-xs font-bold flex justify-between">
          <label htmlFor="email">Email address</label>
          <span className="text-red-500">{emailError}</span>
        </div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@company.com"
          className={
            isValid
              ? "p-4 border border-accent rounded-md pl-8 outline-accent"
              : "p-4 border border-red-500 rounded-md pl-8 outline-red-500 bg-red-100 text-red-500"
          }
        />
      </div>
      {}
      <Button onClick={handleSubmit}>Subscribe to montly newsletter</Button>
    </form>
  );
}

export default EmailForm;
