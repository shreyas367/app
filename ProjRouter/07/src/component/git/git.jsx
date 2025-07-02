import React, { useEffect } from 'react'

export default function git() {

    const [data, setData] = React.useState([])  
    useEffect(() => {
        fetch('https://api.github.com/users/shreyas367')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));  

}, []);


  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">Github ID : {data.login} 
        <br /> Username: {data.name}
        <br />Repository : {data.public_repos}</div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">Github Followers :{data.followers}</div>   
    </>
  )
}
