import React, { useState } from 'react';
import axios from 'axios';

/* [axios] 
 - 비동기로 서버에 HTTP 요청을 보내고 응답을 처리하는데
   유용한 라이브러리(브라우저, Node.js 모두 사용 가능)

 - fetch 는 js 기본 내장되어있지만
   axios는 별도 설치(라이브러리 사용) 필요

 - getch보다 간단하고 추가적인 기능을 제공
*/

/* 회원 가입 컴포넌트 */
const SignUpComponent = () => {
  /* 상태변수 선언 */
  const [id,      setId     ] = useState('');
  const [pw,      setPw     ] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [name,    setName   ] = useState('');

  // 아이디 중복 여부 결과를 저장할 변수
  const [idValidation, setIdValidation] = useState(false);

  // 회원 가입 성공 여부를 저장 할 변수
  const [result, setResult] = useState('');



  // id 체크함수
  const idCheckHandler = e => {
    const inputId = e.target.value.trim();
    setId(inputId);
    if(inputId.length<4) {
      setIdValidation(false);
      return;
    }

    // 비동기로 id 중복검사
    axios.get(`http://localhost:8080/todo/idCheck?id=${inputId}`)
    .then(response => {
      //console.log(response); // 응답 관련 정보가 담긴 객체
      //console.log(response.data); // 응답 받은 데이터만

      const result = response.data;

      if(result === 0){
        setIdValidation(true);
      } else {
        setIdValidation(false);
      }

    })
    .catch(err => console.error(err));

  }

  /* 가입버튼 클릭 동작 - 유효성 검사 */
  const signUpHandle = () => {

    // 아이디가 유효하기 않은경우
    if(idValidation === false){
      alert("아이디가 유효하기 않습니다.");
      return;
    }

    // 비밀번호 확인 중 하나라도 작성되지 않은경우
    if(pw.length === 0 || pwCheck.length === 0){
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    // 비밀번호화 비밀번호 확인의 값이 일치하지 않은경우
    if(pw !== pwCheck){
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 이름이 입력되지 않은경우
    if(name.trim().length === 0){
      alert("이름이 입력되지 않았습니다.");
      return;
    }

    axios.post("http://localhost:8080/todo/signUp", {
      "todoMemberId" : id,
      "todoMemberPw" : pw,
      "todoMemberName" : name
    })
    .then(response => {
      const result = response.data;
      if(Number(result) > 0){
        setResult('회원가입성공');

        // 가입 성공시 입력했던 값 다 지우기
        setId('');
        setPw('');
        setPwCheck('');
        setName('');
      } else {
        setResult('실패');
      }
    })
    .catch(err => console.log(err));
  }

  return(
    <div className='signup-container'>
      <label>
        ID :
        <input
         type="text"
         onChange={idCheckHandler}
         className={idValidation ? '' : 'id-error'}
         value={id}
         />
      </label>
      
      <label>
        PW :
        <input
         type="password"
         onChange={ (e) => {setPw(e.target.value)} }
         value={pw}
         />
      </label>

      <label>
        PW Check :
        <input
         type="password"
         onChange={ (e) => {setPwCheck(e.target.value)} }
         value={pwCheck}
         />
      </label>
      
      <label>
        NAME :
        <input
         type="text"
         onChange={ (e) => {setName(e.target.value)} }
         value={name}
         />
      </label>

      <button onClick={signUpHandle}>가입하기</button>

      <hr />

      <h3>{result}</h3>
    </div>
  )
}

export default SignUpComponent;

/*
Access to XMLHttpRequest at 'http://localhost:8080/todo/idCheck?id=us111' from origin 'http://localhost'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

CORS(Cross-Origin Resource Sharing)
- 서로 다른 도메인에서 (다른 사이트/서버)에서
. 리소스 요청할 수 있도록 허용하는 메커니즘
- react(80) -> spring(8080) 자원요청
.              (허용X) -> CORS 오류 발생
*/