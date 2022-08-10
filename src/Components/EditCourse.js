import React, { Component } from "react";
import LoggedInUser from "../utility/loggedInUser"
import CourseToEdit from "../utility/courseToEdit"
import axios from 'axios';

class EditCourse extends Component {

    constructor() {
        super();

      const courseEdit=CourseToEdit.getCourseEdit();
      const editcrs={_id:'',courseId:'',courseName:'',instructor:'',level:''}
        this.state = {
          _id:courseEdit._id,
          courseId: '',
          courseName: '',
          instructor: '',
          level:'',
          coursesData:{},
          courseDetails:editcrs
        };
      
      
    
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleEdit.bind(this);
      }

      componentWillMount() 
      {
          axios.get(`http://localhost:4000/lms/getCourse/${this.state._id}`, {
                  responseType: 'json'
              }).then(response => {
                this.setState({coursesData:response.data})
                 
                 
                  console.log(response.data);
                  console.log("---")
                  console.log(this.state.coursesData)
              
                  const courseDetailsresp = {
                    _id:this.state.coursesData._id,
                    courseId:this.state.coursesData.courseId,
                    courseName:this.state.coursesData.courseName,
                    instructor:this.state.coursesData.instructor,
                    level:this.state.coursesData.level
                  }
                  this.setState({courseDetails:courseDetailsresp})
                    CourseToEdit.setCourseEdit(courseDetailsresp)
                    console.log(this.state.courseDetails.courseName)
                    console.log(courseDetailsresp.courseName)
                }
               
              );
            }

      handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
        console.log(`${name}-- ${value}`)
        this.setState({
          [name]: value
        });
        console.log(this.state)
      }
 

      handleEdit(event){
        event.preventDefault();
        
        console.log("The form was submitted with the following data:");
       console.log(this.state);
       const { courseId, courseName, instructor,level } = this.state;

            const courseDetails = {
               
                courseId,

                courseName,

                instructor,

                level };
        const editData = {
        
          courseId:this.state.courseId,
          courseName:this.state.courseName,
          instructor:this.state.instructor,
          level:this.state.level
        }
       // const { courseId, courseName, instructor,level,enrollment } = this.state.coursesData;
            //const editDetails=this.state.courseDetails;

            console.log(editData.courseName);
            this.EditCourse(courseDetails)
            .then(data => {
                if(data.error){
                    this.setState({error:data.error})
                } 
                else{
                
                  console.log(data)
                  console.log(LoggedInUser.getLoggedUser)
                } 
              })
    }

    EditCourse = courseDetails => {
        const token = JSON.parse(localStorage.getItem('token')); 
        console.log(`state passed ${this.state}`)
        console.log(courseDetails.courseId)
        console.log(`t is ${token}`)
        return fetch(`http://localhost:4000/lms/editCourse/${this.courseDetails._id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `token ${token}`
            },
            body: JSON.stringify({
              "courseId": courseDetails.courseId,
              "courseName": courseDetails.courseName,
              "instructor": courseDetails.instructor,
              "level": courseDetails.level,
              "enrollment": 0
          })
            
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    }

   render (){
    const { _id,courseId, courseName, instructor,level,enrollment,coursesData,courseDetails } = this.state;
  

    return (
      <form>
        <h3 className="fs-4 title-color">Edit Course</h3>
        <div className="mb-3">
          <label>Course Id</label>
          <input
            type="text"
            className="form-control"
            placeholder={this.state.coursesData.courseId}
            id="courseId"
            name="courseId"
           // value={this.state.coursesData.courseId}
             onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Name</label>
          <input
            type="text"
            className="form-control"
            placeholder={this.state.coursesData.courseName}
            id="courseName"
            name="courseName"
           // value={this.state.coursesData.courseName}
             onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Instructor</label>
          <input type="text" className="form-control" placeholder={this.state.coursesData.instructor} id="instructor" name="instructor" 
          //value={this.state.coursesData.instructor}
               onChange={this.handleChange}
              />
        </div>
        <div className="mb-3">
          <label>Course Level</label>
          <select name="level" id="level" className="form-control" onChange={this.handleChange} value={this.state.level}>
                <option value="Grad">Graduate</option>
                <option value="Undergrad">UnderGraduate</option>
                <option value="PhD">PhD</option>
            </select>
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.handleEdit}>
            Edit
          </button>
        </div>
        
      </form>
    );
   }

  
}

export default EditCourse;
