import React, {useContext, useState} from 'react'

/* 외부에 존재하는 Context 파일 가져오기 */
import UserContext from './User_Context';

const Child = () => {

  // Context로 전달받은 부모의 상태변수 얻어오기
  const {userList, setUserList} = useContext(UserContext);

  // 자식 컴포넌트에서만 사용할 상태변수 선언
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  // 추가 버튼 클릭시 부모상태변수 userList에 값을 추가하는 함수
  const addUser = () => {

    // 입력값을 이용해서 객체생성
    const user = {"name":inputName,"age":inputAge};
    
    // 부모의 상태변수 userList를 깊은복사
    const newUserList = [...userList, user];

    // 새 배열을 부모상태변수에 대입
    setUserList(newUserList);

    setInputName('');
    setInputAge('');
  }

  return(
    <div>
      <h2>Child Component</h2>
      <label htmlFor="inputName">이름입력</label>
      <input type="text" id='inputName' onChange={(e)=>{setInputName(e.target.value)}} value={inputName}/>
      <br />

      <label htmlFor="inputAge">나이입력</label>
      <input type="number" id='inputAge' onChange={(e)=>{setInputAge(e.target.value)}} value={inputAge}/>
      <button onClick={addUser}>추가</button>
    </div>
  )
}

export default Child;