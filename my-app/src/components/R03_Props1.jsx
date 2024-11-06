import React from "react";

/* 함수형 컴포넌트 생성
 - 함수는 무조건 대문자로 시작
*/
const PropsEx1 = (props) => {

  // 부모로 부터 전달받은 props에는 값 대입 불가
  // if(props.name === undefined){
  //   props.name = '입력없음';
  // }

  return(

    <>
      <h3>Props 예제 1</h3>
      <p>번호 : {props.num === undefined ? 0 : props.num} / 이름 : {props.name === undefined ? '기본값' : props.name }</p>
    </>
  );
}

export default PropsEx1;