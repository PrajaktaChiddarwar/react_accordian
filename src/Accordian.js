import React, { useState }  from 'react';
import Questions from './Api';
import './Accordian.css';
import Myaccordian from './Myaccordian';
const  Accordian = () =>
{
    const[data,setData]= useState(Questions);
    return(
        <>
        <section className='main-div'>
        <h1>React Interview Questions</h1>
        {
        data.map((curElement)=>
        {
           const  {Id} =curElement;
           return <Myaccordian key={Id} {...curElement}/>
        })

        }
        </section>
        </>
        )
}
export default Accordian;