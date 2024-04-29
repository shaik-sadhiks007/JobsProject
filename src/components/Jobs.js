import React, { useContext} from 'react';
import { formatDistanceToNow } from 'date-fns';
import { JobsContext } from './JobsContext';

function Jobs() {

    const {posts,jobs,setPosts} = useContext(JobsContext);

    const handleFilterBy = (type) => {
        let sortedPosts = [...posts]; 
    
        switch(type) {
            case 'newest':
                sortedPosts.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));
                break;
            case 'a-z':
                sortedPosts.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case 'z-a':
                sortedPosts.sort((a, b) => b.category.localeCompare(a.category));
                break;
            default:
                break;
        }
    
        setPosts(sortedPosts); 
    }
    


    const TimeAgo = ({ dateTime }) => {
        const date = new Date(dateTime);
        const timeAgo = formatDistanceToNow(date, { addSuffix: true });
        return <span>{timeAgo}</span>;
    }

    return (
        <>
            <div className="3177">
                <div className="d-flex justify-content-between">
                <h2 className="">{jobs} Jobs</h2>
                    <div className="d-flex shadow align-items-center justify-content-end ps-3">
                        <i className="fa-solid fa-arrow-down-wide-short drop"></i>
                        <div className="btn-group">
                            <button className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                                <span className="me-5">Filter by</span>
                            </button>
                            <ul className="dropdown-menu" >
                                <li style={{cursor : 'pointer'}} className='ms-3' onClick={() => handleFilterBy('newest')}>Newest</li>
                                <li style={{cursor : 'pointer'}} className='ms-3' onClick={() => handleFilterBy('a-z')}>A-Z</li>
                                <li style={{cursor : 'pointer'}} className='ms-3' onClick={() => handleFilterBy('z-a')}>Z-A</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {posts.map((eachJob, index) => (
                <div className="d-flex flex-row shadow mt-3 p-3" key={index}>

                    <div className="img">
                        <img src={eachJob.company_logo} alt="" />
                    </div>
                    <div className="information ps-3">
                        <p className="company mb-0 pt-0">{eachJob.company_name}</p>
                        <a href={eachJob.url} target="_blank" className='text-decoration-none text-dark'><h5 className="role mt-1">{eachJob.category}</h5></a>
                        {eachJob?.tags.map((eachTag,index) => (
                            <span className="badge badge-secondary bg-danger me-2 mb-2"key={index}>{eachTag}</span>
                        ))}
                        <div className="address d-flex flex-row flex-wrap align-items-center">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <p className="add m-0">{eachJob.candidate_required_location}</p>
                            <i className="fa-solid fa-circle circ mx-3"></i>
                            <i className="fa-regular fa-clock me-2"></i>
                            <p className="add m-0">{eachJob.job_type}</p>
                            <i className="fa-solid fa-circle circ mx-3"></i>
                            <i className="fa-solid fa-dollar-sign me-2"></i>
                            <p className="add m-0">{eachJob?.salary ? eachJob.salary : 'NA'}</p>
                            <i className="fa-solid fa-circle circ mx-3"></i>
                            <i className="fa-regular fa-calendar me-2"></i>
                            <p className="add m-0">
                                <TimeAgo dateTime={eachJob.publication_date} />
                            </p>
                        </div>
                        <p className="matter mt-1">
                            Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt
                            eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
                        </p>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Jobs
