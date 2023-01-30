import React , {useState} from 'react';
const Myaccordian = ({Question, Answer}) =>
{
    const[show,setShow] =  useState(false);
    return(
        <>
        <div className='main-heading'>
            <p onClick={()=> setShow(!show)}>{show? '➖' : '➕'}</p>
            <h3>{Question}</h3>
        </div>
       {show && <p className='Answer'>{Answer}</p>}
        </>
    );
}
 export  default Myaccordian;