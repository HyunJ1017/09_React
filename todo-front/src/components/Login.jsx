import React, { useState, useContext } from 'react';

import TodoListContext from '../contexts/TodoListContexts';

import axios from 'axios';

const LoginComponent = () => {

  // 전역 변수(Context) 얻어와 구조 분해 할당
  const {loginMember, setLoginMember, todoList, setTodoList} = useContext(TodoListContext);

  // 상태변수선언
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 로그인 이벤트 핸들러
  const login = () => {

    axios.post("http://localhost:8080/todo/login", {
      "todoMemberId" : id,
      "todoMemberPw" : pw
    })
    .then(response => {
      console.log(response.data);

      // 구조분해 할당
      const {loginMember, todoList} = response.data;

      if(loginMember === null){
        alert("아이디또는비밀번호가일치하지않습니다.");
        return;
      } else {

        // 로그인 성공시
        setId('');
        setPw('');

        // context로 전달받은 부모상태변경값 변경setter를 이용해서 값 대입
        setLoginMember(loginMember);
        setTodoList(todoList);
      }
    })
    .catch(err => console.log(err));

  };

  // 로그아웃 이벤트 핸들러
  const logout = () => {
    setLoginMember(null);
    setTodoList('');
  };

  return (
    <div className="login-container">
      { loginMember === null && (
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input type="text" onChange={e => setId(e.target.value)} value={id} />
              </td>
            </tr>

            <tr>
              <th>PW</th>
              <td>
                <input type="password" onChange={e => setPw(e.target.value)} value={pw} />
              </td>
              <td>
                <button onClick={login} >Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      { loginMember && (<button onClick={logout}>로그아웃</button>) }
    </div>
  );

}

export default LoginComponent;