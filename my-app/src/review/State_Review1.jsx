import React, { useState } from 'react';

const StateReview1 = () => {

  // 상태변수 선언
  // 구조분해할당
  const [str, setStr] = useState('');

  // 생태변수
  // 근데 이제 배열을 곁들인
  const [strList, setStrList] = useState([]);


  const inputCheck = (e) => {
    setStr(e.target.value.trim());
  };

  // e에 어떤 key가 눌렸는지 넘어옴
  const inputEnter = (e) => {
    if(e.key === 'Delete'){
      setStrList([]);
    }
    if(e.key === 'Enter'){
      // 엔터키가 입력된 경우
      if(e.target.value.trim().length === 0) return;
      setStrList([...strList, str]);
      e.target.value = '';
      setStr('');
    }
  };

  const clear = () => {
    setStrList([]);
  }

  return(
  <>
  <div>
    <h2>State 복습 1번</h2>
    <div>
      <label htmlFor="inputString">문자열 입력</label>&nbsp;
      <input type="text" id="inputString" onKeyUp={inputEnter} onChange={inputCheck}/>
    </div>
    <h3>입력된 값 : {str}</h3>
    <button onClick={clear}>초기화</button>
    <ul id='123'>
      <li key='-1'>문자열 입력 후 엔터 입력 시 ul 태그에 누적</li>
      {/* {tempList.map((item,index)=>{
        return(<><li>{index} : {item}</li></>)
      })} */}
      {strList.map((item,index)=>{
        return(<><li key={index}>{item}</li></>);
      })}
    </ul>
  </div>

  </>
  )
}

export default StateReview1;
/* 전개연산자 (...)
  - 배열 또는 객체의 가장 바깥쪽 괄호를 푸는 연산자

  ex : const temp = [1,2,3];
  ...temp // 1,2,3
const temp2 = [...temp, 4]
temp2 // [1,2,3,4]

- 배열 : 요소추가, 복사, 배열 병합
- 객체 : 복사, 병랍, 속성 덮어쓰기(객체값중 일부만 변경)



  // 배열사용연습
  const tempList = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg'];
  // 배열.map( (item, index) => {} )
  // 매개변수에서 작성된 함수에서 반환된 값을 이용해 새로운 배열을 반드는 배열 메서드
  // item : 요소를 하나씩 저장하는 변수
  // index : 현재 인덱스
  console.log(tempList);
  const tempList2 = tempList.map((item,index)=>{
    return `${index} : ${item}`;
  });
  console.log(tempList2);
*/