import React, { useState } from 'react';

const StateEx2 = (map) => {

  // 상태(state) 변수 선언
  // -> 상태변수 count의 값이 변할 때 마다 컴포넌트 reRandering
  const [count, setCount] = useState(map.init);

  const countChangeHandler = e => {
    const order = e.target.innerText;
    if(order === '+') setCount( Number(count) + 1 );
    else setCount( Number(count) - 1 );
  }

  return(
    <>
      <div className='count-container'>
        <button className='minus-btn btn' onClick={countChangeHandler}>-</button>
        <h1> {count} </h1>
        <button className='plus-btn btn' onClick={countChangeHandler}>+</button>
      </div>
    </>
  )
}

export default StateEx2;