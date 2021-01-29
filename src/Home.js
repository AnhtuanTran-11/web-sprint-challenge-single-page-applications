import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const routeToPizza = () => {
    history.push('/pizza');
  };
  return (
    <div className='homeDiv'>
      <img
        className='homeImage'
        src='https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
        alt=''
      />
      <button onClick={routeToPizza} className='pizzaButton'>
        Pizza?
      </button>
    </div>
  );
}
