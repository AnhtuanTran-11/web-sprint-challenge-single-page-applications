import React from "react";
import { unstable_batchedUpdates } from "react-dom";

export default function Form(props) {
  const { values, submit, update, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  // const onChange = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   const valueToUse = type === 'checkbox' ? checked : value;
  //   change(name, valueToUse);
  // };
  const onChange = event => {
    const {name, value} = event.target;
    update(name, value);
  }

  return (
    <div className='pizzaForm'>
      <img
        className='homeImage'
        src='https://images.unsplash.com/photo-1534963063257-6b65b54e438b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
        alt=''
      />
      <h1 className='buildPizza'>Build Your Own Pizza</h1>
      <form onSubmit={onSubmit}>
        <div className='choiceOfSize'>
          <h2>Choice of size</h2>
          <p>Required</p>
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>--Select an option--</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>

          </select>
        </div>
        <div className='choiceOfSauce'>
          <h2>Choice of Sauce</h2>
          <p>Required</p>
          <label>
            <input
              type='radio'
              name='sauce'
              value='original-red'
              checked={values.sauce === 'original-red'}
              onChange={onChange}
            />
            Original Red
          </label>
          <label>
            <input
              type='radio'
              name='sauce'
              value='garlic-ranch'
              checked={values.sauce === 'garlic-ranch'}
              onChange={onChange}
            />
            Garlic Ranch
          </label>
          <label>
            <input
              type='radio'
              name='sauce'
              value='bbq'
              checked={values.sauce === 'bbq'}
              onChange={onChange}
            />
            BBQ Sauce
          </label>
          <label>
            <input
              type='radio'
              name='sauce'
              value='spinach-alfredo'
              checked={values.sauce === 'spinach-alfredo'}
              onChange={onChange}
            />
            Spinach Alfredo
          </label>
        </div>
        <div className='toppings'>
          <label>
            <h2>Add Toppings</h2>
            <input
              type='checkbox'
              name='pepperoni'
              value='pepperoni'
              checked={values.pepperoni}
              onChange={onChange}
            />
            Pepperoni
          </label>
          <label>
            <input
              type='checkbox'
              name='sausage'
              value='sausage'
              checked={values.sausage}
              onChange={onChange}
            />
            Sausage
          </label>
          <label>
            <input
              type='checkbox'
              name='bacon'
              value='bacon'
              checked={values.bacon}
              onChange={onChange}
            />
            Bacon
          </label>
          <label>
            <input
              type='checkbox'
              name='chicken'
              value='chicken'
              checked={values.chicken}
              onChange={onChange}
            />
            Grilled Chicken
          </label>
        </div>
        <div className='name'>
          <label>
            <h2 className='nameTitle'>Name</h2>
            <input
              className='nameInput'
              type='text'
              name='name'
              value={values.name}
              onChange={onChange}
            />
          </label>
        </div>
        <div className='specialInstructions'>
          <h2 className='special'>Special Instructions</h2>
          <input
            className='textBox'
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
          />
        </div>
        <button disabled={disabled} className='orderButton'>
          Add to Order
        </button>

        <div>{errors.name}</div>
        
      </form>
    </div>
  );
}
