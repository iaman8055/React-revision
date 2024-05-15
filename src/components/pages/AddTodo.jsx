import { useContext, useRef, useState } from "react";
import { TodoItemContext } from "./shop/TodoItemContext";

function AddTodo() {
  // const [name,setName]=useState('')
  // const [duedate,setdueDate]=useState('')
  // const nameHandler=(e)=>{
  //   setName(e.target.value)  }
  //   const dateHandler=(e)=>{
  //     setdueDate(e.target.value)
  //   }
  const {addItem}=useContext(TodoItemContext)
  const todoNameElement=useRef();
  const todoDueDateElement=useRef();

    const handleAddButton=()=>{
      const name=todoNameElement.current.value;
      const duedate=todoDueDateElement.current.value;

      addItem(name,duedate)
      todoNameElement.current.value="";
      todoDueDateElement.current.value="";
    }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" 
          placeholder="Enter Todo Here"
          ref={todoNameElement}/>
        </div>
        <div className="col-4">
          <input type="date"
          ref={todoDueDateElement}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButton} >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;