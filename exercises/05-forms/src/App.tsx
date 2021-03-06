import React, { useState } from "react";
import "./App.css";
import states from "./assets/states.json";
import countries from "./assets/countries.json";
import { type } from "node:os";

interface State {
  firstName?: string;
  lastName?: string;
  addressLine1?: string;
  city?: string;
  postalCode?: number;
  country?: string;
  [key: string]: string;
}

const DefaultProps: State = {
  firstName: "",
  lastName: "",
  addressLine1: "",
  city: "",
  postalCode: 12345,
  country: "",
};

const App: React.FunctionComponent<State> = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const [formsValues, setFormsValues] = useState<State | undefined>(undefined);

  const [submittedValues, setSubmittedValues] = useState<typeof DefaultProps>();

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmittedValues({ ...formsValues });
    setFormsValues(submittedValues);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormsValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form className="container mt-4" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formsValues?.firstName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formsValues?.lastName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formsValues?.addressLine1}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formsValues?.city}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select
          id="state"
          name="state"
          className="form-control"
          onChange={handleChange}
          value={formsValues?.city}
        >
          {states.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formsValues?.postalCode}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="form-control"
          onChange={handleChange}
          value={formsValues?.country}
        >
          {countries.map((country) => {
            return <option value={country}>{country}</option>;
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary" onChange={handleChange}>
        Submit
      </button>

      {submitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          <h3>Results:</h3>
          <ul className="list-unstyled mb-0">
            {submittedValues &&
              Object.keys(submittedValues).map((key, index) => (
                <li key={index}>{`${key}: ` + submittedValues[key]}</li>
              ))}
          </ul>
        </div>
      )}
    </form>
  );
};

App.defaultProps = DefaultProps;

export default App;
