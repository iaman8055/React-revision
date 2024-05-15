import { createContext } from "react";
import { useReducer, useState } from "react";

export const TodoItemContext=createContext([]);
const todoItemsReducer=(currtodoItems,action)=>{
    let newTodoItems=currtodoItems
    if(action.type==='NEW_ITEM'){
      newTodoItems=[...currtodoItems,{name:action.payload.itemName,
        dueDate:action.payload.itemDueDate
      }];
    }else if(action.type==='DELETE_ITEM'){
      newTodoItems=currtodoItems.filter((item)=>item.name!==action.payload.itemName);
    }
    return newTodoItems;
  }
const TodoItemsContextProvider=({children})=>{
 // const [todoItems,setTodoItems]=useState([{
  //   name: "Buy Milk",
  //   dueDate: "4/10/2023",
  // },
  // {
  //   name: "Go to College",
  //   dueDate: "4/10/2023",
  // },
  // {
  //   name: "Like this video",
  //   dueDate: "right now",
  // },])

  const[todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,[])
  const addItem=(itemName,itemDueDate)=>{
    const newItemAction={
      type: 'NEW_ITEM',
      payload:{
        itemName,
        itemDueDate
      }
    }
    dispatchTodoItems(newItemAction)
  }
  const deleteItem=(itemName)=>{
    const deleteItemActon={
      type:'DELETE_ITEM',
      payload:{
        itemName
      }
    }
    dispatchTodoItems(deleteItemActon);
  }
//   const handleNewItem=(itemName,itemDate)=>{
//     console.log(`New item Added: ${itemName} Date:${itemDate}`)
//     let newTodoItem=[...todoItems,{name:itemName,
//       dueDate:itemDate
//     }];
//     setTodoItems(newTodoItem)
//   }
  
//  const handleDeleteItem=(todoName)=>{
//   const newTodoItems=todoItems.filter((item)=>item.name!==todoName);
//   setTodoItems(newTodoItems)
//   console.log(todoName)
//  }
 const contextValue={todoItems,addItem,deleteItem}
return (
    <TodoItemContext.Provider value={contextValue}>
        {children}
    </TodoItemContext.Provider>
)
}
export default TodoItemsContextProvider;