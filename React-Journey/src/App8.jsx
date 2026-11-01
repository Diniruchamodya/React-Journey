import { useState } from "react";

function App() {
    const [FullName,setFullName] = useState("");
    const [Email,setEmail] = useState("");
    const [Age,setAge] = useState("");
    const [Degree,setDegree] = useState("");

    const [errors,setErrors] = useState({});

    const [successMessage,setSuccessMessage] = useState("");

  // TODO 4: Handle changes to the form fields.
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  // TODO 5: Validate all fields.
  const validateFields = () => {
    const nextErrors = {};
    const trimmedName = FullName.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ageValue = Number(Age);

    if (!trimmedName) {
      nextErrors.FullName = "Full name is required";
    } else if (trimmedName.length < 3) {
      nextErrors.FullName = "Full name must be at least 3 characters";
    }

    if (!Email.trim()) {
      nextErrors.Email = "Email is required";
    } else if (!emailPattern.test(Email.trim())) {
      nextErrors.Email = "Enter a valid email address";
    }

    if (!Age.trim()) {
      nextErrors.Age = "Age is required";
    } else if (!/^\d+$/.test(Age.trim()) || ageValue < 18 || ageValue > 60) {
      nextErrors.Age = "Age must be a whole number between 18 and 60";
    }

    if (!Degree) {
      nextErrors.Degree = "Degree programme is required";
    }

    return nextErrors;
  };

  // TODO 6: Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    setErrors(validationErrors);
    setSuccessMessage("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Simulate form submission logic
    setSuccessMessage("Registration successful!");
  };

  return (
    <main>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" value={FullName} onChange={handleFullNameChange} />
        </label>
        {errors.FullName && <p>{errors.FullName}</p>}

        <label>
          Email
          <input type="email" value={Email} onChange={handleEmailChange} />
        </label>
        {errors.Email && <p>{errors.Email}</p>}

        <label>
          Age
          <input type="number" value={Age} onChange={handleAgeChange} />
        </label>
        {errors.Age && <p>{errors.Age}</p>}

        <label>
          Degree programme
          <select value={Degree} onChange={handleDegreeChange}>
            <option value="">Select a degree programme</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business">Business</option>
            <option value="Engineering">Engineering</option>
            <option value="Arts">Arts</option>
          </select>
        </label>
        {errors.Degree && <p>{errors.Degree}</p>}

        {FullName && <p>Full Name: {FullName}</p>}

        {Email && <p>Email: {Email}</p>}

        {Age && <p>Age: {Age}</p>}

        {Degree && <p>Degree: {Degree}</p>}

        <button type="submit">Register</button>
      </form>

      {/* TODO: Display field errors */}
      {Object.keys(errors).length > 0 && (
        <div>
          <h2>Validation Errors</h2>
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {successMessage && <p>{successMessage}</p>}

    </main>
  );
}

export default App;