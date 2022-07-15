import React, { useEffect, useState } from 'react';
import './IndiaActive.css';
const IndiaActive =()=>{
    const [data, setData] = useState([]);
       const getData = async ()=>{
           const res = await fetch("https://api.covid19api.com/summary");
           const findData = await res.json();
           setData(findData.Countries[77]);
           console.log(findData.Countries[77]);
       }
       useEffect(()=>{
        getData();
       },[])
    return(
        <> 
              <h4 className="text-center mt-2">India Covid19 Live Tracker</h4>
              <p className='text-center bg-dark p-1 text-light'><span>Last Update:</span> {data.Date}</p>
               <div className='main-container '>
                 <div className='our_country bg-primary bg'>
                 <h4 className='text-center text-light mt-5 text'>INDIA 🇮🇳</h4>
              </div>
            <div className='our_country bg-danger'>
                <p className='text-center text-light mt-4 text1'><span className='new'>New</span>Confirmed</p>
                <p className='text-center text-light display-6 text'>{data.NewConfirmed}</p>
           </div>
           <div className='our_country bg-success'>
                <p className='text-center text-light mt-4 text1'><span className='new'>New</span>Recoverd</p>
                <p className='text-center text-light display-6 text'>{data.NewRecovered}</p>
          </div>
       </div>
        <div className='main-container'>
             <div className='our_country bg-secondary'>
                 <p className='text-center text-light mt-4 text1'><span className='new'>New</span>Deaths</p>
                 <p className='text-center text-light display-6 text'>{data.NewDeaths}</p>
            </div>
              <div className='our_country bg-info'>
                <p className='text-center text-light mt-4 text1'><span className='new'>Total</span>Confirmed</p>
                <p className='text-center text-light display-6 text'>{data.TotalConfirmed}</p>
             </div>
             <div className='our_country bg-dark'>
                <p className='text-center text-light mt-4 text1'><span className='new'>Total</span>Deaths</p>
                <p className='text-center text-light display-6 text'>{data.TotalDeaths}</p>
             </div>
          </div>
          
       
        </>
    )
}
export default IndiaActive;