import React, {createContext, useContext, useState} from 'react'

const Ctx = createContext();



/* 후손 컴포넌트 */
const GrandChild = () => {

  // Ctx를 통해 전달된 값
  // -> {"number" : number, "setNumber": setNumber}
  const {number, setNumber} = useContext(Ctx);
  // number, setNumber는 Parent의 상태변수
  // -> 상태변수 값이 변하면 컴포넌트(Parent) 리랜더링 수행
  
  return(
    <>
    <h3>GrandChild Component</h3>
    <div>
      Parent로 전달할 값 : <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
    </div>
    </>
  )
}

/* 자식 컴포넌트 */
const Child = () => {
  console.log('배가고파요');
  return(
    <>
    <h2>Child Component</h2>
    <GrandChild/>
    </>
  )
}

/* 부모 컴포넌트 */
const Parent = () => {

  const [number, setNumber] = useState(0);
 /* Context 객체를 이용해서 여러 값을 제공하고 싶을 경우
     JS 객체 {}를 이용 
   */
  // const obj = {"number" : number, "setNumber": setNumber};
  // React에서 value={ {number, setNumber} } 작성하면
  // 자동으로 변수명이 key, 값이 value 형태로 변환됨
  // => {"number" : number, "setNumber": setNumber}
  return(
    <Ctx.Provider value={ {number, setNumber} }>
    <h1>Parent Component : <span className='red'>{number}</span></h1>
    <Child/>
    </Ctx.Provider>
  )
}

export default Parent;