import React from 'react'

const Book=({img,title,auther}) =>{

    const clickHandler= () =>{
        alert('hello world');
    };

    return(
      <article className="book">
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{auther}</h4>
        <button type="button" onClick={clickHandler}>example</button>
      </article>
    )
  }
  
export default Book
