import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState} from 'react'
import { Studentcontext} from './StudentContextAPI';
import './styleeditandadd.css'


const EditStudentinfo = () => {

  const [students] = useContext(Studentcontext);
  const navigate = useNavigate();
  const {userId} = useParams();
  let [name, setName] = useState(students[userId-1].Name)
  let [age, setAge] = useState(students[userId-1].Age)
  let [course, setCourse] = useState(students[userId-1].Course)
  let [batch, setBatch] = useState(students[userId-1].Batch)    
  // let [currentObj] = useState(students[userId-1])

  
  const onNameUpdate = (event) => {
    setName(event.target.value)
    
}

const onAgeUpdate = (event) => {
    setAge(event.target.value)
}

const onBatchUpdate = (event) => {
    setBatch(event.target.value)
}

const onCourseUpdate = (event) => {
    setCourse(event.target.value)
}


const onSubmit = () => {


    students[userId - 1] = { 
      Name:name,
      Age:age,
      Course:course,
      Batch:batch,    
      userId:userId
        
     }
    
  


navigate("/student")


}


const onBack = () => {
  navigate("/student")
}












  return (
    <>
  <br/><br/><br/>
 <div className='add-edit-form'>
    &nbsp;&nbsp;  <label for="name" id="namestyle">Name</label><br/><br/>
      &nbsp;&nbsp;  <input id="name"  placeholder="Name" type="text" value={name} name="name" onChange={onNameUpdate}/><br/><br/>
      &nbsp;&nbsp;  <label for="age" id="agestyle">Age</label><br/><br/>
      &nbsp;&nbsp;   <input id="age" placeholder="Age" type="number" name="age" value={age} onChange={onAgeUpdate}/><br/><br/>
      &nbsp;&nbsp;  <label for="course" id="coursestyle">Course</label><br/><br/>
      &nbsp;&nbsp;     <input id="course"  placeholder="Course" type="text" name="course" value={course} onChange={onCourseUpdate}/><br/><br/>
      &nbsp;&nbsp;  <label for="batch" id="batchstyle">Batch</label><br/><br/>
      &nbsp;&nbsp;     <input id="batch" placeholder="Batch" type="text" name="batch" value={batch} onChange={onBatchUpdate}/><br/><br/>
      &nbsp;&nbsp;     <button  onClick={onBack} id="back"> BACK</button>
      &nbsp;&nbsp;     <button onClick={onSubmit} type="submit" id="submit">SUBMIT</button>
     
    
            </div>     
        
         
        
     
     </>
)


};

export default EditStudentinfo