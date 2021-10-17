import React, { useEffect}from 'react'
import Profile from './Profile';
import axios from "axios";

function User(props) {
    useEffect(() => {
          async function getData() {
        try {
            let res = await axios({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'get',
                timeout: 8000,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (res.status === 200) {
                // test for status you want, etc
                console.log(res.status)
                // console.log(res) 
                return res.data
            }
            // Don't forget to return something   
            // return null
            return res.data
        }
        catch (err) {
            console.error(err);
            return err
        }
        }
       getData()
        .then(res => console.log(res)) 

    },[])
  

    
    
    return (
        <div>
            <h4>User component</h4>
            <Profile />
        </div>
    )
}

export default User
