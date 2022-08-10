import React from 'react'
import {Navigate}  from 'react-router-dom'
import LoggedInUser from '../utility/loggedInUser'

const RequireAuth = ({children}) => {
    // const auth=useAuth()
    const loggedInUser=LoggedInUser.getLoggedUser();
    console.log(`req auth use ${LoggedInUser.getLoggedUser().name}`)
    if(loggedInUser.id ===''){
        return <Navigate to='/login' />
    }
  return children
}

export default RequireAuth
