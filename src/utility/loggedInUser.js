let LoggedInUser=(function(){
    let loggedUser={
        id:'',
        isAdmin:'',
        name:'',
        membershipType:''
    }

    let getLoggedUser=function(){
        return loggedUser;
    }

    let setLoggedUser=function(varloggedUser){
        loggedUser.id=varloggedUser.id;
        loggedUser.isAdmin=varloggedUser.isAdmin
        loggedUser.name=varloggedUser.name
        loggedUser.membershipType=varloggedUser.membershipType
    };


    return{
        getLoggedUser: getLoggedUser,
        setLoggedUser:setLoggedUser
    }

})();

export default LoggedInUser;