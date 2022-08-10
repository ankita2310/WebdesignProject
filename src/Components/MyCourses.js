import React from "react";
import logo from '../images/progess.jpg';
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



const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
      }
}));

const auth=LoggedInUser.getLoggedUser();
console.log(`auth is ${auth.id}`)

export default class AllCourses extends React.Component {



    constructor() {
        super();
    this.state ={coursesData: []};
    }

    
 
    componentDidMount() 
    {   console.log(`auth is ${auth.id}`)
        const token = JSON.parse(localStorage.getItem('token')); 
        console.log(`t is ${token}`)
        axios.get(`http://localhost:4000/lms/getMyCourses/${auth.id}`,{
                responseType: 'json',
                headers: {
                  Authorization: `token ${token}`
                }
            }).then(response => {
              console.log("got response");
                this.setState( {coursesData: response.data} );
                console.log(this.state.coursesData);
                console.log(this.state.coursesData[0].courseName);
            });}

           /*  const token = 'YOUR_TOKEN_HERE';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json)); */
  

  

  render() {
     if (this.state.loading) {
      return <div>loading...</div>;
      
    }
    if (!this.state.coursesData.length) {
      return <div>No registered Courses</div>;
    } 

    const data = {
        id: [1]
      };
   

    return (

        <div>
        <br></br>
        <h2 className= "Home">Your Progress!</h2>
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
        <Button size="small" color="primary">
        
          See progress
        </Button>
      </CardActions>
       
    </Card>
    </Grid>
    ))}


    </Grid>
   ))}

          
        </div>
        

        
      );
  }
}



