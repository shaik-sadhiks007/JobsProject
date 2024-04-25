import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Filters from './components/Filters';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar';
import { JobsContext } from './components/JobsContext';
import useCustomHook from './components/useCustomHook';

function App() {

  const { position, setPosition, location, setLocation,posts,handleSearch,setWorkExperience,workExperience,setDateFilter,setSalaryFilter,jobs,setPosts } = useCustomHook();


  const data = {position, setPosition, location, setLocation,posts,handleSearch,setWorkExperience,workExperience,setDateFilter,setSalaryFilter,jobs,setPosts}

  return (
    <JobsContext.Provider value={data}>

      <Navbar />
      <Banner />
      <div className="container d-flex flex-lg-row flex-column column-gap-lg-4 row-gap-4 my-5 ">
        <Filters />
        <Jobs />
        <Contact />
      </div>
      

      <div className='text-center'>api is provided by remotive.com</div>


    </JobsContext.Provider>

  );
}

export default App;
