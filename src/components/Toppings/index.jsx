import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Toppings = () => {
  const [data,setData]=useState([])
  const [basket,setBasket]=useState([])

 useEffect(()=>{
  axios.get("http://localhost:4040/toppings")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
 },[])

 const handleChange =(isChecked,item)=>{
  console.log(isChecked,item)

  isChecked
  ? setBasket([...basket,item])
  : setBasket (basket.filter((i) => i.name !== item.name))
 }

 console.log(basket)

  return (
    <div>
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi <span className='text-success'>3</span>₺</p>
      <h3>
        Soslar ücreti: <span data-testid="total" className='text-success'>{basket.length *3}</span>₺
      </h3>

 
      <div className=' conta gap-3 mt-4'>
        {data.map((item)=> 
        <div className=' top-card' style={{width:"150px"}}>
        <label htmlFor={item.name}>
        <img height={100} src={item.imagePath} />
        <p className='text-nowrap text-center'>{item.name}</p>
        </label>
        <input onChange={(e)=>handleChange(e.target.checked,item)} id={item.name} type="checkbox" />
        </div> )}
      </div>
    </div>
  )
}

export default Toppings
