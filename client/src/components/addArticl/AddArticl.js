import React, { useState } from 'react'
import './AddArticl.css'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addArticl } from '../../JS/actions/articlAction';
const AddArticl = () => {
  const dispatch = useDispatch()
  const history=useHistory()
  const [newArticl, setNewArticl] = useState({})
  const handleChange=(e)=>{
      e.preventDefault();
      
      setNewArticl({...newArticl,[e.target.name]:e.target.value})
  }
  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const newarticle={
        title:data.get('title'),
        nameNutri:data.get('nameNutri'),
        description:data.get('description'),
        photo:data.get('photo')
           }
           console.log(newarticle)
     dispatch(addArticl(newarticle,history));
    }
    return (
        <div class="body">
          <div class="center" onSubmit={handleSubmit}>
  <h1>Add Articl</h1>
  <form>
    <div class="inputbox">
      <input onChange={handleChange}name="nameNutri" placeholder="name" value={newArticl.nameNutri}/>
      <span>Name</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange}name="photo" placeholder="photo" value={newArticl.photo}/>
      <span>Photo</span>
    </div>
    <div class="inputbox">
      <input onChange={handleChange} name="desc" placeholder="desc" value={newArticl.desc}/>
      <span> Descriptition</span>
    </div>
    <div class="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
        </div>
    );
    }

export default AddArticl
