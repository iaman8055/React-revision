// // import React, { useEffect, useState } from 'react'
// // import { ThemeProvider } from './components/context/context'
// // import ThemeBtn from './components/ThemeBtn'
// // import Card from './components/Card'
// // const App = () => {
// //   const[themeMode,setThemeMode]=useState('light')  
// //   const lightTheme=()=>{
// //     setThemeMode('light')
// //   }
// //   const darkTheme=()=>{
// //     setThemeMode('dark')
// //   }
// //   useEffect(()=>{
// //     document.querySelector('html').classList.remove('light','dark')
// //     document.querySelector('html').classList.add(themeMode)
// //   },[themeMode])
// //   return (
// //     <div>
// //        <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
// //       <div className="flex flex-wrap min-h-screen items-center">
// //           <div className="w-full">
// //               <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
// //                   <ThemeBtn />
// //               </div>



// //               <div className="w-full max-w-sm mx-auto">
// //                   <Card />
// //               </div>
// //           </div>
// //       </div>
// //     </ThemeProvider>
// //     </div>
      
// //   )
// // }

// // export default App

// import React, { useEffect, useState } from 'react'
// import { TodoProvider } from './components/context/TodoContext'

// const App = () => {
//   const [todos,setTodos]=useState([]);
//   const addTodo=(todo)=>{
//     setTodos((prev)=>[{id:Date.now(),...todo},...prev])
//   }
//   useEffect(()=>{
//     const todos=JSON.parse(localStorage.getItem('todos'))
//     if(todos &&todos.length>0)setTodos(todos)
//   },[])
//   useEffect(()=>{
//     localStorage.setItem("todos",JSON.stringify(todos))
//   },[todos])
//   const updatedTodo=(id,todo)=>{
//     setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
//   }
//   const deleteTodo=(id)=>{
//     setTodos((prev)=>(prev.filter((todo)=>todo.id!==id)))
//   }
//  const toggleComplete=(id)=>{
//   setTodos((prev)=>prev.map((prevTodo)=>prevTodo===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
//  }
//   return (
//     <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>

//     </TodoProvider>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Container from "./components/pages/Container";
// import FoodItems from "./components/pages/FoodItems";
// import FoodInput from "./components/pages/FoodInput";

// const App = () => {
//   // let foodItems=["dal",'raita','Green Vegetable','Roti','salad','Milk','Ghee'];
//   const[foodItems,setFoodItems]=useState(["dal",'raita','Green Vegetable'])
//   const handleKeyDown=(e)=>{// function to add new fooditems in list 
//     if(e.key==='Enter'){
//       let newFoodItem=e.target.value;
//       let newItem=[...foodItems,newFoodItem];
//       setFoodItems(newItem)
//     }
//   }
//   const handleOnChange=(e)=>{
//     console.log(e.target.value)
//   }
//   return (
//     <Container>
//     {/* {foodItems.map((item)=>(
//     <Items foodItem={item}></Items>))} */}
//     <FoodInput handleKeyDown={handleKeyDown}/>
//     <FoodItems items={foodItems}></FoodItems>
//     </Container>
//   )
// }

// export default App




import "./App.css";
import AddTodo from "./components/pages/AddTodo";
import AppName from "./components/pages/AppName";
import TodoItems from "./components/pages/TodoItems";
import TodoItemsContextProvider, { TodoItemContext } from "./components/pages/shop/TodoItemContext";

function App() {

  return (
  <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;
//calculator
// import { useState } from 'react'
// import styles from './App.module.css'
// import ButtonContainer from "./components/pages/Calculator/ButtonContainer"
// import Display from "./components/pages/Calculator/Display"
// const App = () => {
 
//   const [display,setDisplay]=useState('');
//   const handleOnClick=(buttonText)=>{

//     if(buttonText==='C'){
//       setDisplay("")
//     }else if(buttonText==='='){
//       const result=eval(display)
//       setDisplay(result)
//     }else{
//       const displayValue=display+buttonText;
//       setDisplay(displayValue)
//     }
//   }
 
//   return (
//     <div className={styles.calculator}>
//       <Display display={display}></Display>
//       <ButtonContainer handleOnClick={handleOnClick}/>
//     </div>
//   )
// }

// export default App