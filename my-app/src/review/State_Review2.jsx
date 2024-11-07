import React, { useState } from 'react';

const StateReview2 = () => {

  const [todoList, setTodoList] = useState([]);
 
  const InputTodo = () => {

    const [inputText, setInputText] = useState('');
  
    const inputHandler = (e) => {
      setInputText(e.target.value);
      console.log(inputText);
    }
  
    const addTodoHandler = ()=>{
      if(inputText.length === 0) return;
      const todo = {"text" : inputText, "completed" : false};
      const newTodoList = [...todoList, todo];
      setTodoList(newTodoList);
      setInputText('');
    }
  

    return(
      <div>
        <h3>할 일 추가</h3>
        <input type="text" onChange={inputHandler}/>
        
        <button onClick={addTodoHandler}>추가하기</button>
      </div>
    )
  }

  const todoChange = (index) => {
    const tempTodoList = [...todoList];
    console.log(tempTodoList);

    tempTodoList[index].completed = !tempTodoList[index].completed;
    
    setTodoList(tempTodoList);
  }

  return(
    <>
    <h1>State Liview 2 입니다.</h1>
    <InputTodo/>

    <ul>
      {todoList?.map((item,index) => {
        return(
          <>
          <li key={index}>
            <input type="checkbox" checked={item.completed} onChange={ ()=> { todoChange(index) }} />
            <span className={ item.completed ? 'completed' : '' } >{item.text}</span>
          </li>
          </>
        )
      })}

      
    </ul>
    </>
  )
}

export default StateReview2;