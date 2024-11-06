import './App.css';
// import ClassComponent from './components/R01_ClassComponent';
// -> R01_ClassComponent에서 import된 HTML요소를
//    ClassComponent라고 부르겠다
//    -> <ClassComponent/> 형태로 사용 가능
// import FunctionComponent from './components/R02_FunctionComponent';

// import Props1 from './components/R03_Props1';
// import Props2 from './components/R04_Props2';
// import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';
import State2 from './components/R07_State2';
import State3 from './components/R08_State3';

// 기본적으로 //, /**/ 주석 사용 가능(JS니까)
// 단, return 구분 내부 HTML코드 영역은 {/* */} 주석 사용

function App() {
  return (
    <>
      {/* 클래스형 컴포넌트 */}
      {/* <ClassComponent/> */}
      
      {/* 함수형 컴포넌트 */}
      {/* <FunctionComponent/> */}

      {/* <Props1/> */}
      {/* <Props1 num = "1" name = "홍길동"/> */}
      {/* <Props1 num = "2" name = "김미영"/> */}
      {/* <Props1/> */}

      {/* <Props2 name='강감찬' address='여기' age='30' gender='남자' /> */}
      {/* <Props2 name='고양희' address='저기' age='5' gender='여자' /> */}
      {/* <Props3 productName='김밥' price='3000'/> */}
      {/* <Props3 productName='라면' price='4500'/> */}
      {/* <State1/> */}
      {/* <State2 init='20241106'/> */}
      <State3/>
    </>
  );
}

export default App;
