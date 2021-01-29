import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from 'yup';
import schema from './validation/formSchema'
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

/// INITIAL STATES ///
const initialFormValues = {
/// TEXT INPUTS ///
name: '',
special: '',
/// RADIO BUTTONS ///
sauce: '',
/// DROP DOWN ///
size: '',
/// CHECKBOXES ///
pepperoni: false,
sausage: false,
bacon: false,
chicken: false,
};
/// INITIAL FORM ERRORS
const initialFormErrors = {
  name: ""
}
/// INITIAL VALUE FOR DISABLED
const initialDisabled = true;

export default function App() {
/// STATES ///
const [formValues, setFormValues] = useState(initialFormValues);
const [disabled, setDisabled ] = useState(initialDisabled);
const [formErrors, setFormErrors] = useState(initialFormErrors);

const handleError = err => {debugger};
const resetForm = () => setFormValues(initialFormValues);

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

const postValues = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });

  setFormValues({
    ...formValues,
    [name]: value,
  });

  const newOrder = {
    name: formValues.name.trim(),
    special: formValues.special.trim(),
    sauce: formValues.sauce,
    size: formValues.size,
    pepperoni: formValues.pepperoni,
    sausage: formValues.sausage,
    bacon: formValues.bacon,
    chicken: formValues.chicken,
  }

  axios.post('https://reqres.in/api/users', newOrder)
  .then(res => {
    setFormValues(initialFormValues)
  })
  .catch(handleError)
  .finally(resetForm)
}

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="header">
      <nav>
        <h1 className="restaurant-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/" className="button">
            Home
          </Link>
          <Link to="/pizza" className="button">
            Order Now
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path={"/pizza"}>
          <Form
            values={formValues}
            submit={postValues}
            disabled={disabled}
            update={updateForm}
            errors={formErrors}
             />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}