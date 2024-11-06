import React from 'react';
import '../css/Props.css';
// css를 해당 jsx 파일에 import 했다고 해서 해당 파일에만 적용되는것이 아닌 출력된 화면에 모두 적용된다.

const PropsEx2 = (props) => {

  // 구조분해 할당(객체{})
  let {name, age, address, gender} = props;

  return(
    <>
    {/* react에서 클레스 속성은 className 이라고 작성해야 함 */}
      <ul className='info'>
        <li>이름 : {name}</li>
        <li>주소 : {address}</li>
        <li>성별 : {gender}</li>
        <li>
          나이 : {age}세,&nbsp;
          {age < 20
           ? <span className='red'>미성년자 입니다</span>
           : <span className='green'>성인 입니다</span>
          }
          </li>
      </ul>
    </>
  )

};

export default PropsEx2;