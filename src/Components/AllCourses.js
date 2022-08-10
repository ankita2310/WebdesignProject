import React from "react";
import logo from '../images/logo.jpg';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import LoggedInUser from "../utility/loggedInUser";
import { Navigate ,useNavigate} from "react-router-dom";
import EditCourse from "./EditCourse";
import CourseToEdit from "../utility/courseToEdit";
import { useState } from 'react';
import Popup from './Popup';


const auth=LoggedInUser.getLoggedUser();
const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
      }
}));



class AllCourses extends React.Component {
  
    constructor() {
        super();
    this.state ={
      coursesData: [],
    userAdmin:LoggedInUser.getLoggedUser().isAdmin,
    editFlag:false,
    id : "",
      status :"",
      showPopup : false
    };
    console.log(this.state.userAdmin)
    }
    
 
    componentDidMount() 
    {
        axios.get('http://localhost:4000/lms/getAllCourses', {
                responseType: 'json'
            }).then(response => {
                this.setState( {coursesData: response.data} );
                console.log(this.state.coursesData);
                console.log(this.state.coursesData[0].courseName);
            });}
  
           
    //  handleEdit = () => {
    //         this.setState({editFlag:true})
    //         console.log(this.state.editFlag)
    //         console.log("inside button")
         
    //       }; 

          handleClick = ev => {
            const cid=ev.currentTarget.value
          
            if(this.state.userAdmin)
            {
             
              this.setState({editFlag:true})
              this.setState({id:cid})
            }
else {
      //this.setState({id: ev.currentTarget.value })

      console.log(ev.currentTarget.value)

      console.log("inside enroll")

      console.log(`auth is ${auth.id}`)
      console.log(`id is ${ev.currentTarget.value}`)
      const token = JSON.parse(localStorage.getItem('token')); 
      console.log(`t is ${token}`)
      axios.post(`http://localhost:4000/lms/register/${auth.id}/${ev.currentTarget.value}`,{
              responseType: 'json',
              headers: {
                Authorization: `token ${token}`
              }
          }).then( async (response) => {
            console.log(response.status);
            
          if (response.status === 200) {
            console.log(this.state.status)
            this.setState({status:200})
            this.togglePopup()
          }
          
          }).catch(async (response)  => {
            if (response.message) {
              console.log(this.state.status)
              this.setState({status:400})
              this.togglePopup()
              console.log(response.message)
            }
          }
          );
      
    }
  }

          

          

       
 togglePopup() {  
    console.log('inside toggle')
    if(!this.state.userAdmin){
    this.setState({  
      showPopup: true 
    }); 
  }
    console.log(this.state.showPopup)
  
}

  render() {

    if(this.state.editFlag){
      console.log(this.state.editFlag)
      console.log(this.state.id)
      const courseEdit=CourseToEdit;
      const course={
        _id:this.state.id,
        courseId: '',
        courseName: '',
        instructor: '',
        level:'',

      }
      courseEdit.setCourseEdit(course);
      return <Navigate to="/editcourse" />
    }

   /*  if(this.state.enrollFlag){
      console.log(this.state.enrollFlag)
      return <Navigate to="/editcourse" />
    } */
    
     if (this.state.loading) {
      return <div>loading...</div>;
      
    }
    if (!this.state.coursesData.length) {
      return <div>didn't get a course</div>;
    } 

    const data = {
        id: [1]
      };
   

    return (

        <div>
        <br></br>
        <h2 className= "Home">Enhance,Explore and Grow</h2>
        <br></br>

           {data.id.map((elem) => (
             <Grid
             container
             spacing={2}
             direction="row"
             justify="flex-start"
             alignItems="flex-start"
           >
        {this.state.coursesData.map((elem) => (
            <Grid item xs={3} key={this.state.coursesData.indexOf(elem)}>

    <Card>
    
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Skill Name"
          height="400"
          width="500"
          image={logo}
          title="Skill Name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {elem.courseName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {elem.instructor}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      {/* <Button size="small" color="primary" disabled={this.state.userAdmin} onClick={() => enroll(this.state.coursesData)}  >
        Enroll course
        </Button>
        {/* {this.state.isAdmin ? <Button size="small" color="primary" onClick={this.handleEdit}>
          Edit course
        </Button> : null} */}

      {/*   <Button size="small" color="primary" onClick={this.handleEdit} disabled={!this.state.userAdmin} >
        Edit course
        </Button> */} 

        <Button color="primary" onClick={this.handleClick} value = {elem._id}>{this.state.userAdmin ? <h3> Edit course</h3> : <h3>Enroll course</h3>}
        </Button>
      </CardActions>
       
    </Card>
    </Grid>
    ))}


    </Grid>
   ))}

<Popup id="popup" trigger={this.state.showPopup} setTrigger={this.togglePopup}>
                    {(this.state.status === 200) ? <h3> Enrolled</h3> : <h3>Already Enrolled</h3>}
</Popup>
          
        </div>
        

        
      );
  }
}

export default AllCourses;



