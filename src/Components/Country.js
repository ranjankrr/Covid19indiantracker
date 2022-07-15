import React,{useEffect, useState} from 'react';
const Country =()=>{
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const getData = async () => {
      const res = await fetch("https://api.covid19api.com/summary");
      const findData = await res.json();
      setData(findData.Countries);
     
    };
    useEffect(() => {
      getData();
    }, []);
    const searchBox =(e)=>{
           setSearch(e.target.value);
    }
    return (
      <>
      
       <div className='search-box'>
            <input type="search" onChange={searchBox} placeholder="Search Your Country Name"/>
       </div>
    <div className='container'>
    <h3 className='text-center text-success'>CountryWise Covid19 Dashboard</h3>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead className='bg-dark text-light'>
            <tr>
              <th>Countries</th>
              <th>NewConfirmed</th>
              <th>TotalConfirmed</th>
              <th>NewDeaths</th>
              <th>TotalDeaths</th>
              <th>NewRecovered</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((items)=>items.Country.toLowerCase().includes(search)).map((items) => {
              return (
                <tr>
                  <td>{items.Country}</td>
                  <td className='text-danger'>{items.NewConfirmed}</td>
                  <td className='text-primary'>{items.TotalConfirmed}</td>
                  <td className='text-warning'>{items.NewDeaths}</td>
                  <td className='text-info'>{items.TotalDeaths}</td>
                  <td className='text-success'>{items.NewRecovered}</td>
                  <td className='text-success'>{items.Date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
    </div>
      </>
    );
}
export default Country;