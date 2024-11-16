import React from 'react';
import { useState } from 'react';
import './App.css'
import Form from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';


const App = () => {
const [inputValue , setInputValue] = useState('');
const [list , setList] = useState([]);
const [editTodo , setEditTodo] = useState();
//accesing todo when entering input here
const handleChange =(event)=>{
setInputValue(event.target.value)

}
// submit todos
const handleSubmit =(event)=>{
  event.preventDefault();
const newlist = [...list,inputValue];
setList(newlist)
setInputValue('')

}
// delete todos

const handleDelete = (index) =>{
  const newList = [...list]
  newList.splice(index,1)
  setList(newList)
};
// editing todos

const handleEdit =(number) =>{
setInputValue(list[number]);
setEditTodo(number);

};
// update todos

const updateTodo =()=>{
const newUpdateList = [...list];
newUpdateList[editTodo] = [inputValue];
setList(newUpdateList);
setInputValue('')
setEditTodo(undefined)
}

  return (
    <section className='box'>
   <div className='textBox'>
   <h1>To Do List</h1>
   <p className='todolength'>{list.length}{" "}Todos</p>
   </div>
    <div className='container'>
     <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto text" placeholder="Add your item here..."  value={inputValue} onChange={handleChange}/>
      <Button variant="secondary" className='btn' onClick={editTodo !== undefined ? updateTodo : handleSubmit }>{editTodo !== undefined ? "update" : "add"}</Button>
      <div className="vr" />
    </Stack>
     
     <ul>
      {list.map((list,index) =>
        <li key={index} className='lists'>{list} 
        <button onClick={handleDelete} className='addButton'>Delete</button>
        <Button className='addButton' onClick={()=>handleEdit(index)}>Edit</Button>
        </li>
      )}
     </ul>


    </div>
    </section>

  )
}

export default App