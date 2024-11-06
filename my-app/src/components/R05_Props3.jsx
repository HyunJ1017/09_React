import React from 'react';

const Child1 = (props) => {
  let {productName, option, price} = props;
  return(
    <>
      <h4>자식 1</h4>
      <ul className='info'>
        <li>메뉴명 : {productName}</li>
        <li>추가옵션 : {option}</li>
        <li>가격 : {price}</li>
      </ul>
    </>
  );
}
const Child2 = (props) => {
  let {productName, addMenu, price}=props;
  return(
    <>
      <h4>자식 2</h4>
      <ul className='info'>
        <li>메뉴명 : {productName}</li>
        <li>추가메뉴 : {addMenu}</li>
        <li>가격 : {price}</li>
      </ul>
    </>
  );
}

const PropsEx3 = (props) => {

  let {productName, price} = props

  // app.js에서 전달받은 값을 Child1/2에 다시 전달
  return(
    <>
      <h2>Props Drilling (상태 내리꽂기)</h2>
      <Child1 productName={productName}
              option='치즈 추가'
              price={1000 + Number(price)} />
      <Child2 productName={productName}
              addMenu='김밥한줄'
              price={3000 + Number(price)}/>
    </>
  )
}

export default PropsEx3;