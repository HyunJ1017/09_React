import React, { useState } from 'react';

const ChildId = (props) => {

  // 부모로부터 전달받은 idHandler 함수
  // 부모의 상태변수값을 자식 input태그에 입력된 값으로 변경하는 함수 실행
  // == 자식이 부모의 상태변수에 값을 대입
  const handler = props.handler;
  
  return(
    <tr className='wrapper'>
      {/* htmlFor == for */}
      <td><label htmlFor="inputId">ID</label></td>
      <td><input type="text" id='inputId' onChange={handler} placeholder='아이디'/></td>
    </tr>
  )
}
const ChildPw = (props) => {
  
  const {handler} = props;

  return(
    <tr className='wrapper'>
      <td><label htmlFor="inputPw">PW</label></td>
      <td><input type="password" id='inputPw' onChange={handler} placeholder='비밀번호'/></td>
    </tr>
  )
}

/* 부모 컨포넌트 */
const ParentComponent = (props) => {

  // 상태변수
  const [id, setId] = useState(''); // 초기값 빈칸
  const [pw, setPw] = useState(''); // 초기값 빈칸

  // 이벤트핸들러
  const idHandler = e => {
    setId(e.target.value);
    // 인풋에 작성된 값이 변하면 id변수값을 바꿔서 리랜더링 수행
  }
  const pwHandler = e => {
    setPw(e.target.value);
    // 인풋에 작성된 값이 변하면 id변수값을 바꿔서 리랜더링 수행
  }

  const loginCheck = () => {
    if(id === 'user01' && pw === 'pass01'){
      alert("good");
    } else {
      alert("no good");
    }
  }

  return(
    <>
      <table>
        <ChildId handler={idHandler}/>
        <ChildPw handler={pwHandler}/>
      </table>

      <div className='wrapper'>
        <button disabled={id.length === 0 || pw.length === 0 ? true : false} onClick={loginCheck}>로그인</button>
      </div>
    </>
  )

}

export default ParentComponent;