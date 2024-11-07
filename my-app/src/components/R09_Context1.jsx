import React, {createContext, useContext} from 'react';

const TestContext = createContext();

/* 후손 컴포넌트 */
const GrandChild = () => {

  // TestContext에서 제공하는 값 value를 text에서 사용
  const text = useContext(TestContext);
  return(
    <>
    <h3>GrandChild Component</h3>
    <em>{text}</em>
    </>
  )
}

/* 자식 컴포넌트 */
const Child = () => {
  return(
    <>
    <h2>Child Component</h2>
    <GrandChild/>
    </>
  )
}

/* 부모 컴포넌트 */
const Parent = () => {
  return(
    /* Context 객체를 이용해서 하위 모든 컴포넌트에 value 제공 */
    <TestContext.Provider value='Parent에서 전달한 값'>
    <h1>Parent Component</h1>
    <Child/>
    </TestContext.Provider>
  )
}

export default Parent;