import React from 'react'
import './Service.css';
import react, { useState } from 'react';


function Service() {

  const dataList = [
    {
      "id": 1,
      "name": "cerulean",
      "year": 2000,
      "color": "#98B2D1",
      "age": "15"
    },
    {
      "id": 2,
      "name": "fuchsia rose",
      "year": 2001,
      "color": "#C74375",
      "age":23
    },
    {
      "id": 3,
      "name": "true red",
      "year": 2002,
      "color": "#BF1932",
      "age":54
    },
    {
      "id": 4,
      "name": "aqua sky",
      "year": 2003,
      "color": "#7BC4C4",
      "age":34
    },
   {
      "id": 5,
      "name": "tigerlily",
      "year": 2004,
      "color": "#E2583E",
      "age":54
    },
    {
      "id": 6,
      "name": "blue turquoise",
      "year": 2005,
      "color": "#53B0AE",
      "age": "15"
    },
    {
      "id": 7,
      "name": "sand dollar",
      "year": 2006,
      "color": "#DECDBE",
      "age": "13"
    },
    {
      "id": 8,
      "name": "chili pepper",
      "year": 2007,
      "color": "#9B1B30",
      "age": "19"
    },
    {
      "id": 9,
      "name": "blue iris",
      "year": 2008,
      "color": "#5A5B9F",
      "age": "18"
    },
    {
      "id": 10,
      "name": "mimosa",
      "year": 2009,
      "color": "#F0C05A",
      "age": "14"
    },
    {
      "id": 11,
      "name": "turquoise",
      "year": 2010,
      "color": "#45B5AA",
      "age": "15"
    },
    {
      "id": 12,
      "name": "honeysuckle",
      "year": 2011,
      "color": "#D94F70",
      "age": "18"
    },
    {
      "id": 13,
      "name": "cerulean",
      "year": 2000,
      "color": "#98B2D1",
      "age": "15"
    },
    {
      "id": 14,
      "name": "fuchsia rose",
      "year": 2001,
      "color": "#C74375",
      "age": "17"
    },
    {
      "id": 15,
      "name": "true red",
      "year": 2002,
      "color": "#BF1932",
      "age": "19"
    },
    {
      "id": 16,
      "name": "aqua sky",
      "year": 2003,
      "color": "#7BC4C4",
      "age": "14"
    },
    {
      "id": 17,
      "name": "tigerlily",
      "year": 2004,
      "color": "#E2583E",
      "age": "17"
    },
    {
      "id": 18,
      "name": "blue turquoise",
      "year": 2005,
      "color": "#53B0AE",
      "age": "15"
    },
    {
      "id": 19,
      "name": "sand dollar",
      "year": 2006,
      "color": "#DECDBE",
      "age": "13"
    },
    {
      "id": 20,
      "name": "chili pepper",
      "year": 2007,
      "color": "#9B1B30",
      "age": "19"
    },
    {
      "id": 21,
      "name": "blue iris",
      "year": 2008,
      "color": "#5A5B9F",
      "age": "18"
    },
    {
      "id": 22,
      "name": "mimosa",
      "year": 2009,
      "color": "#F0C05A",
      "age": "14"
    },
    {
      "id": 23,
      "name": "turquoise",
      "year": 2010,
      "color": "#45B5AA",
      "age": "15"
    },
    {
      "id": 24,
      "name": "honeysuckle",
      "year": 2011,
      "color": "#D94F70",
      "age": "18"
    },
    
{
  "id": 25,
  "name": "ceruAlean",
  "year": 2001,
  "color": "#98B2D1",
  "age": "35"
},
{
  "id": 26,
  "name": "Orang rose",
  "year": 2006,
  "color": "#C74375",
  "age":24
},
{
  "id": 27,
  "name": "False red",
  "year": 2004,
  "color": "#BF1932",
  "age":43
},
{
  "id": 28,
  "name": "Blue sky",
  "year": 2013,
  "color": "#7BC4C4",
  "age":37
},
{
  "id": 29,
  "name": "LillyTiger",
  "year": 2014,
  "color": "#E2583E",
  "age":52
},
{
  "id": 30,
  "name": "blueish",
  "year": 2015,
  "color": "#53B0AE",
  "age": "19"
}
  ];
  const [searchText, setSearchText]=useState('');   //capture the value from input box
  const [data, setData]=useState(dataList);
  const excludeC = ['color'];  //exclude the color for filter.
  
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  }
  
  const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue)
    {
      setData(dataList);
    }
    else{
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key=>{return excludeC.includes(key)? false : item[key].toString().toLowerCase().includes(lowerCaseValue);})
      });
      setData(filteredData);
    }
  }
  return (
    <div className="App">
     Search<input type="text" placeholder="Search..." value={searchText} onChange={e=>handleChange(e.target.value)}/>
      <div className="box-container">
        {data.map((d, i) => {
          return <div className="box" key={i} style={{backgroundColor: d.color}}>
            <b>Name: </b>{d.name}<br/>
            <b>Year: </b>{d.year}<br/>
            <b>Color: </b>{d.color}<br/>
            <b>Age: </b>{d.age}<br/>
          </div>
        })}
        <div className="clearboth"></div>
        {data.length===0 && <span>No records found...</span>}
      </div>
    </div>
    
  );
}


export default Service;

