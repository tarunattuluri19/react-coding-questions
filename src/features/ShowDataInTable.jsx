import React, { useEffect, useState } from 'react'

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
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left'
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px'
  };

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            {['User Name', 'Social Security Number', 'First Name', 'Last Name', 'Company', 
              'Gender', 'Country', 'Birth Date', 'Image'].map(header => (
              <th key={header} style={cellStyle}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data.users.map((item,id)=>(
              <tr key={id}>
                <td style={cellStyle}>{item.username}</td>
                <td style={cellStyle}>{item.ssn}</td>
                <td style={cellStyle}>{item.firstName}</td>
                <td style={cellStyle}>{item.lastName}</td> 
                <td style={cellStyle}>{item.company.name}</td>
                <td style={cellStyle}>{item.gender}</td>
                <td style={cellStyle}>{item.address.country}</td>
                <td style={cellStyle}>{item.birthDate}</td>
                <td style={cellStyle}>
                  <img src={`${item.image}`} alt={item.firstName} style={{width: "50px"}}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowDataInTable