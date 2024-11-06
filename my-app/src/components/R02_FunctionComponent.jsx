import React, {useState} from 'react';

//  함수형  컴포넌트
// 1.  함수   생성하기
// 2. return  구문에   출력하고자   하는  html  코드   작성
// 3.  만든   함수를  export default  지정하기
function FunctionEx(){

  const [count, setCount] = useState(0); // [0, count값을 바꿀 수 있는 메서드]
  // 구조분해할당

  // 클릭 시 count 1 감소
  const clickHandler = () => {
    setCount( () => { return count - 1 } );
  }

  return(
    <>
      <h2>함수형 컴포넌트 입니다.</h2>
      <h2>{count}</h2>
      <button onClick={clickHandler}>-1 감소</button>
      
    </>
  )
}

export default FunctionEx;
