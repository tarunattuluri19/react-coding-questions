import React, { useEffect, useState } from 'react'
import './ShowDataInTable.css';

function ShowDataInTable() {
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    setLoading(true);
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  },[])
  if (loading) {
    return <div className="container">Loading...</div>
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {['User Name', 'Social Security Number', 'First Name', 'Last Name', 'Company', 
              'Gender', 'Country', 'Birth Date', 'Image'].map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.users.map((item,id)=>(
            <tr key={id}>
              <td>{item.username}</td>
              <td>{item.ssn}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td> 
              <td>{item.company.name}</td>
              <td>{item.gender}</td>
              <td>{item.address.country}</td>
              <td>{item.birthDate}</td>
              <td>
                <img className="table-image" src={`${item.image}`} alt={item.firstName} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowDataInTable