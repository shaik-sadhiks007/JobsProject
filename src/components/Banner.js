import React, { useContext } from 'react'
import { JobsContext } from './JobsContext'

function Banner() {

    const {setPosition,setLocation,handleSearch} = useContext(JobsContext);

  return (
    <div className="container">

        <div className="row">

            <h1 className="col-12 mt-5">Find your<mark className="innerText">new job</mark>today</h1>
            <p className="text-secondary col-12">Thousands of jobs in the computer engineering and technology sectors are
                waiting for you.</p>

            <div className="col-lg-12 d-lg-flex">
                
                <div className="col-lg-5 border border-secondary p-2">
                    <i className="fa-solid fa-magnifying-glass icons "></i>
                    <input type="search" className="col-11 border-0"  style={{outline: "none"}}
                        placeholder="What position are you looking for ?" onChange={(event) => setPosition(event.target.value)}/>
                </div>

                <div className="col-lg-5 border border-secondary p-2">
                    <i className="fa-solid fa-location-dot icons"></i>
                    <input type="text" className="col-11 border-0" style={{outline: "none"}} placeholder="Location" onChange={(event) => setLocation(event.target.value)}/>
                </div>

                <button className="col-2 text-white border-0 jbn" onClick={() => handleSearch()}>Search job</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
