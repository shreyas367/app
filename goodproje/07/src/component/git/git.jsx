import React, { useEffect } from 'react'

export default function git() {

    const [data, setData] = React.useState([])  
    useEffect(() => {
        fetch('https://api.github.com/users/shreyas-roy')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));  

}, []);


  return (
       
          
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">Github User Info :{data.followers}</div>   
  )
}
