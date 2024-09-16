import React from 'react'
import Form from './components/Form/index';
import Scoops from './components/Scoops/index';
import Toppings from './components/Toppings/index';

const App = () => {
  return (
    <div className='bg-black min-vh-100  text-light p-3 py-5' >
      <div className='container'>
      <Scoops/>
      <Toppings/>
      <Form/>
      </div>
    </div>
  )
}

export default App
