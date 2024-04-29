import React, { useContext } from 'react';
import { JobsContext } from './JobsContext';

function Filters() {
    const { setLocation, setWorkExperience, setDateFilter, setSalaryFilter } = useContext(JobsContext);

    const handleLocation = (event) => {
        const label = event.target.nextElementSibling.textContent;
        setLocation(label);
    };
    const handleWork = (event) => {
        const label = event.target.nextElementSibling.textContent;
        setWorkExperience(label);
    };
    const handleDateFilter = (event) => {
        const filterValue = event.target.nextElementSibling.textContent;
        setDateFilter(filterValue);
    };
    const handleSalaryFilter = (event) => {
        const filterValue = event.target.nextElementSibling.textContent;
        setSalaryFilter(filterValue);
    };

    return (
        <>
            <div className="shadow p-3 pt-0 " >
                <h3 className="mt-4">Filters</h3>
                <h4>Location</h4>
                <div className="form-check">
                    <input type="radio" id="nearme" name="option1" onChange={(event) => handleLocation(event)} />
                    <label htmlFor="nearme">Worldwide</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="remote" name="option1" onChange={(event) => handleLocation(event)} />
                    <label htmlFor="remote">Canada</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="exact" name="option1" onChange={(event) => handleLocation(event)} />
                    <label htmlFor="exact">USA</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="within15" name="option1" onChange={(event) => handleLocation(event)} />
                    <label htmlFor="within15">UK</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="within30" name="option1" onChange={(event) => handleLocation(event)} />
                    <label htmlFor="within30">Brazil</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="within45" name="option1" onChange={(event) => handleLocation(event)} />
                    <label htmlFor="within45">APAC</label>
                </div>
                <h4>Salary</h4>
                <div className="form-check mt-2">
                    <input type="radio" id="any" name="option2" onChange={handleSalaryFilter} />
                    <label htmlFor="any">Any</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="30" name="option2" onChange={handleSalaryFilter} />
                    <label htmlFor="30">30k</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="50" name="option2" onChange={handleSalaryFilter} />
                    <label htmlFor="50">
                        50k
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" id="80" name="option2" onChange={handleSalaryFilter} />
                    <label htmlFor="80">
                        80k</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="100" name="option2" onChange={handleSalaryFilter} />
                    <label htmlFor="100">
                        100k
                    </label>
                </div>

                <h4 className="filters-container-location-heading">Date of posting</h4>
                <div className="form-check">
                    <input type="radio" id="all" name="option3" onChange={handleDateFilter} />
                    <label htmlFor="all">All time </label>
                </div>
                <div className="form-check">
                    <input type="radio" id="24" name="option3" onChange={handleDateFilter} />
                    <label htmlFor="24">Last 24 hours</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="10" name="option3" onChange={handleDateFilter} />
                    <label htmlFor="10">Last 2 days</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="300" name="option3" onChange={handleDateFilter} />
                    <label htmlFor="300"> Last 7 days</label>
                </div>
                <h4 className="filters-container-location-heading">Work experience</h4>
                <div className="form-check">
                    <input type="radio" id="exp" name="option4" onChange={(event) => handleWork(event)} />
                    <label htmlFor="exp">Any experience</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="intern" name="option4" onChange={(event) => handleWork(event)} />
                    <label htmlFor="intern">Internship</label>
                </div>
                <div className="form-check">
                    <input type="radio" id="full" name="option4" onChange={(event) => handleWork(event)} />
                    <label htmlFor="full">Full_time</label>
                </div>

            </div>
        </>
    );
}

export default Filters;
