import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card'


const Scoops = () => {
  const [data,setData]=useState([])
  const [basket,setBasket]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:4040/scoops")
    .then((res)=>setData(res.data))
  },[])

  const addToBasket=(item)=>{
   setBasket([...basket,item])
  }

  const clearToBasket=(delete_id)=>{
    const filtred= basket.filter((i)=>i.id !==delete_id);
    setBasket(filtred)
  }
  
  console.log(basket)

  return (
    <div className='mb-5'>
    <h1>Dondurma çeşitleri</h1>
    <p>Tanesi <span className='text-success'>20</span>₺</p>
    <h3>
      Çeşitler ücreti:{''}
      <span data-testid="total" className='text-succes'>{basket.length * 20}</span>₺
    </h3>

    <div className='row gap-5 justify-content-between mt-4 '>
      {data.map((i)=>(
        <Card
         item={i} 
         key={i.id}
         basket={basket}
         addToBasket={addToBasket}
         clearToBasket={clearToBasket}
         amount={basket.filter((item)=>item.name==i.name).length} />
        ))}
    </div>
    </div>
  )
}

export default Scoops