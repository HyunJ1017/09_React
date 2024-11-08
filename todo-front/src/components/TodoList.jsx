import React, { useState, useContext } from 'react';
import TodoListContext from '../contexts/TodoListContexts';


const TodoListConponent = () => {

  const {loginMember, setLoginMember, todoList, setTodoList} = useContext(TodoListContext);

  return(
    <>
      <h1>{loginMember.todoMemberName}의 TodoList</h1>

      <ul>
      {todoList.map( (item,index) => {return(<li key={item.todoNo}>{item.todoTitle}</li>)} )}
      </ul>
    </>
  )
}
export default TodoListConponent;