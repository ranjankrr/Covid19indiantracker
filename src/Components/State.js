import React,{useEffect, useState} from 'react';

const State =()=>{
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const getCovid = async()=>{
        const respons =await fetch('https://data.covid19india.org/data.json');
        const findCovid = await respons.json();
        setData(findCovid.statewise)
    
    }
    useEffect(()=>{
        getCovid();
    },[]);
    const searchBox =(e)=>{
        setSearch(e.target.value);
    }
    return(
        <>
        <div className='search-box'>
            <input type="search" onChange={searchBox} placeholder="Search Your State Name"/>
       </div>
           <div className='container'>
            <h3 className='text-center text-danger'>StateWise Covid19 Dashboard</h3>
               <div className='table-responsive'>
                   <table className='table table-hover'>
                       <thead className='bg-success text-light'>
                            <tr>
                                <th>State</th>
                                <th>Active</th>
                                <th>Confirmed</th>
                                <th>Recoverd</th>
                                <th>Deaths</th>
                                <th>Date</th>
                            </tr>
                       </thead>
                       <tbody>
                                {
                                    data.filter((items)=>items.state.toLowerCase().includes(search)).map((items)=>{
                                        return(
                                            <tr>
                                               <td>{items.state}</td>
                                               <td className='text-primary'>{items.active}</td>
                                               <td className='text-warning'>{items.confirmed}</td>
                                               <td className='text-success'>{items.recovered}</td>
                                               <td className='text-danger'>{items.deaths}</td>
                                               <td className='text-success'>{items.lastupdatedtime}</td>
                                            </tr>
                                        )
                                    })
                                }
                            
                       </tbody>

                   </table>
               </div>
           </div>
        </>
    )
}
export default State;