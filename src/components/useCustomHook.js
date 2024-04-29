import React, { useEffect, useState } from 'react';


function useCustomHook() {
    const [position, setPosition] = useState(null);
    const [location, setLocation] = useState(null);
    const [workExperience, setWorkExperience] = useState(null);
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [dateFilter, setDateFilter] = useState(null);
    const [salaryFilter, setSalaryFilter] = useState(null);
    const [jobs,setJobs] = useState(null)
    const [credentials,setCredentials] = useState([])
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [user,setUser] = useState(null)


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setPosts(users);
    }, [users]);

    useEffect(() => {
        handleSearch();
    }, [location, workExperience, dateFilter,salaryFilter]);


    const getData = async () => {

        try {
            const response = await fetch("https://remotive.com/api/remote-jobs");
            const data = await response.json();
            setJobs(data.jobs.length);
            setUsers(data.jobs.slice(0, 5))
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    const handleSearch = () => {

        let filteredPosts = users;

        if (position) {
            filteredPosts = filteredPosts.filter((user) =>
                user.category.toLowerCase().includes(position.toLowerCase()) ||
                (user?.tags.some((tag) => tag.toLowerCase().includes(position.toLowerCase())))
            );
            if (location) {
                filteredPosts = filteredPosts.filter((loc) => loc.candidate_required_location.toLowerCase().includes(location.toLowerCase()))

            }

        } else if (location) {

            if (location !== 'Worldwide') {
                filteredPosts = filteredPosts.filter((loc) => loc.candidate_required_location.toLowerCase().includes(location.toLowerCase()))
            }
        }
        if (workExperience) {
            if (workExperience !== 'Any experience') {
                filteredPosts = filteredPosts.filter((exp) =>
                    exp.job_type.toLowerCase().includes(workExperience.toLowerCase())
                )
            }
        }
        if (dateFilter) {
            const currentDate = new Date();
            switch (dateFilter) {
                case 'Last 24 hours':
                    filteredPosts = filteredPosts.filter(job => {
                        const publicationDate = new Date(job.publication_date);
                        return currentDate - publicationDate < 24 * 60 * 60 * 1000;
                    });
                    break;
                case 'Last 2 days':
                    filteredPosts = filteredPosts.filter(job => {
                        const publicationDate = new Date(job.publication_date);
                        return currentDate - publicationDate < 2 * 24 * 60 * 60 * 1000;
                    });
                    break;
                case 'Last 7 days':
                    filteredPosts = filteredPosts.filter(job => {
                        const publicationDate = new Date(job.publication_date);
                        return currentDate - publicationDate < 7 * 24 * 60 * 60 * 1000;
                    });
                    break;
                default:
                    break;
            }
        }

        if (salaryFilter) {
            filteredPosts = filteredPosts.filter(job => {
                const salary = parseInt(job.salary.split('-')[0].replace(/[^\d]/g, ''));
                switch (salaryFilter) {
                    case '30k':
                        return salary >= 30000;
                    case '50k':
                        return salary >= 50000;
                    case '80k':
                        return salary >= 80000;
                    case '100k':
                        return salary >= 100000;
                    default:
                        return true; 
                }
            });
        }
        setPosts(filteredPosts);
    }




    return {
        position, setPosition, location, setLocation, posts,setPosts, handleSearch, setWorkExperience, workExperience, setDateFilter,setSalaryFilter,jobs,credentials,setCredentials,isLoggedIn,setIsLoggedIn,user,setUser
    }
}

export default useCustomHook;
