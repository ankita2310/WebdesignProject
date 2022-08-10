import React, { Component } from "react";
import LoggedInUser from "../utility/loggedInUser"
import { Navigate, useNavigate } from "react-router-dom";

var courseIdRegex = /^[a-zA-Z0-9-_]+$/;
var courseNameRegex = /^[a-zA-Z0-9-_]+$/;
var instructorNameRegex = /^[a-zA-Z-]+$/;
var courseLevelRegex = /^[a-zA-Z0-9-_]+$/;


const initState = {
  courseId: "",
  courseName: "",
  instructor: "",
  level:"",
  enrollment:0,
  courseIdError:"",
  courseNameError:"",
  courseLevelError:"",
  instructorNameError:""
};


class CreateCourse extends Component {

    constructor() {
        super();
    
        this.state = {
          courseId: "",
          courseName: "",
          instructor: "",
          level:"",
          enrollment:0,
          courseIdError:"",
          courseNameError:"",
          courseLevelError:"",
          instructorNameError:"",
          success:false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
      }

      validate = () => {
        let courseIdError =  "";
        let courseNameError = "";
        let courseLevelError = "";
        let instructorNameError = "";
    
      if (!courseIdRegex.test(this.state.courseId) === true) {
        courseIdError = 'Course Id can only have alphanumberic values, hyphens and underscores';
        }
        else { courseIdError = '' }
    
        if (!courseNameRegex.test(this.state.courseName) === true) {
          courseNameError = 'Course Name can only have alphanumberic values, hyphens and underscores';
        }
    
        else { courseNameError = '' }
    
        if (!instructorNameRegex.test(this.state.instructor) === true) {
          instructorNameError = 'Instructor Name should only have alphabets and hyphens';
        }
    
        else { instructorNameError = '' }

        if (!courseLevelRegex.test(this.state.level) === true) {
          courseLevelError = 'Course level can only have alphanumberic values, hyphens and underscores';
        }
    
        else { courseLevelError = '' }
    
            this.setState({ courseIdError });
            this.setState({ courseNameError });
            this.setState({ instructorNameError });
            this.setState({ courseLevelError });
            
            if(courseIdError || courseNameError || instructorNameError || courseLevelError) {
          return false;
        }
        return true;
      }    

      handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
    
        this.setState({
          [name]: value
        });
      }
 

      handleCreate(event){
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
        console.log("The form was submitted with the following data:");
        console.log(this.state);
        const { courseId, courseName, instructor,level,enrollment } = this.state;
            const courseDetails = {
                courseId,
                courseName,
                instructor,
                level,
                enrollment
            };

            console.log(`coursedeatils is ${this.courseDetails}`);
            this.create(courseDetails)
            .then(data => {
                if(data.error){
                    this.setState({error:data.error})
                } 
                else{
                  console.log("Test1--")
                  console.log(data)
                  console.log(LoggedInUser.getLoggedUser)
                } 
              })
              this.setState(initState)
            }

          
            
    }

    create = courseDetails => {
        const token = JSON.parse(localStorage.getItem('token')); 
        console.log(`state passed ${this.state}`)
        console.log(courseDetails.courseId)
        console.log(`t is ${token}`)
        return fetch("http://localhost:4000/lms/createCourse", {
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
              if (!this.state.success) {
                this.setState({ success: true })
                console.log(this.state.success)
                console.log("sucess edit")
              }
                return response.json();
                
                
            })
            .catch(err => console.log(err));
    }

   render (){
    const { courseId, courseName, instructor,level,enrollment } = this.state;
    if(this.state.success)
    {
      return <Navigate to="/allcourses" />
    }
  

    return (
      <form>
        <h3 className="text-white">Create Course</h3>
        <div className="mb-3">
          <label>Course Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course Id"
            id="courseId"
            name="courseId"
           // value={this.state.courseName}
             onChange={this.handleChange}
          />
        </div>
        <div style={{color:"red", fontSize:12}}>{this.state.courseIdError}</div>
        <div className="mb-3">
          <label>Course Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course name"
            id="courseName"
            name="courseName"
           // value={this.state.courseName}
             onChange={this.handleChange}
          />
        </div>
        <div style={{color:"red", fontSize:12}}>{this.state.courseNameError}</div>

        <div className="mb-3">
          <label>Course Instructor</label>
          <input type="text" className="form-control" placeholder="Enter Instructor" id="instructor" name="instructor"//value={this.state.instructor}
               onChange={this.handleChange}
              />
        </div>
        <div style={{color:"red", fontSize:12}}>{this.state.instructorNameError}</div>
        <div className="mb-3">
          <label>Course Level</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course Level"
            id="level"
            name="level"
            // value={this.state.level}
              onChange={this.handleChange}
          />
        </div>
        <div style={{color:"red", fontSize:12}}>{this.state.courseLevelError}</div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.handleCreate}>
            Create
          </button>
          
        </div>
        
      </form>
    );
   }

  
}

export default CreateCourse