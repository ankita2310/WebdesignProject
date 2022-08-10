let CourseToEdit=(function(){
    let editCourse={
        _id:"",
        courseId: "",
        courseName: "",
        instructor: "",
        level:"",
    }

    let getCourseEdit=function(){
        return editCourse;
    }

    let setCourseEdit=function(varCourseEdit){
        editCourse._id=varCourseEdit._id;
        editCourse.isAdmin=varCourseEdit.courseId
        editCourse.name=varCourseEdit.courseName
        editCourse.membershipType=varCourseEdit.instructor
        editCourse.membershipType=varCourseEdit.level
    };

    return{
        getCourseEdit: getCourseEdit,
        setCourseEdit:setCourseEdit
    }





})();

export default CourseToEdit;
