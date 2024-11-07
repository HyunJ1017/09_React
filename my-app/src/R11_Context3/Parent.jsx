import React, { useState } from 'react';

/* 외부에 존재하는 Context 얻어오기 */
import UserContext from './User_Context';

/* 외부에 존제하는 Child 컴포넌트 가져오기 */
import Child from './Child';


/* 부모 컴포넌트 정의 */
const Parent = () => {

  // 상태변수 배열 선언
  const [userList, setUserList] = useState([]);

  return(
    /* Context 객체에 
    {"userList":userList, "setUserList":setUserList}
    값을 제공할 수 있도록 대입
    */
    <UserContext.Provider value={{userList, setUserList}}>
      <h1>Parent Component</h1>
      <Child/>
      <table border="1">
        <thead>
          <tr>
            <th>순서</th>
            <th>이름</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>
          {userList.map( (user, index) => {
            return(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}세</td>
              </tr>
            )
          } )}
        </tbody>
      </table>
    </UserContext.Provider>
  )
}

export default Parent;