// 컴포넌트 파일 이름은 대문자로 시작해야 합니다.
// .js .jsx 똑같습니다.

import React, {Component} from 'react';
//-> nod_modules 폴더에서 'react' 관련 모듈 중
// React, Component를 얻어와 사용
// (사용시 이름도 React, component)

/* [클래스형 컴포넌트 만들기]
  1. extends Component(import 받은 Component 상속 하여 매서드를 사용)
  2. render() 함수 작성하기(필수)
  3. 만든 클래스를 export default 지정하기
 */
class ComponentEx extends Component{

  // 생성자함수
  constructor(props){
    super(props);
    this.state = {count:0};
  }

  /* 이벤트 핸들러 */
  clickHandler = () => {
    this.setState({ count : this.state.count + 1 });
  }

  // render()
  // 리턴되는 HTML 코드를 화면에 출력하는 함수
  render(){
    return(
      <>
        {/* <></> == fragment(해석되면 사라짐, 묶음용도) */}
      <h2>클래스형 컴포넌트 입니다.</h2>
      <h2>{this.state.count}</h2>
      <button onClick={this.clickHandler}>1 증가</button>
      </>
    );
  }
}

export default ComponentEx;
// -> 다른 js/jsx에서 import해서 사용 가능