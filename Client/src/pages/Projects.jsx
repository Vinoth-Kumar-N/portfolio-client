import { useState, useEffect } from "react";
import AddProComponent from "../components/AddProComponent"
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/api";
// import pro2 from '../assets/img/pro2.jpg'
// import pro1 from '../assets/img/pro1.jpg'
// import pro3 from '../assets/img/pro3.jpg'



const Projects = () => {


  const [prodata, setprodata] = useState([]);


  const fetchprojects = async () => {
    try {
      const response = await getProjects();
      if (!response) {
        console.log("error occuring");
      }
      setprodata(response.data);
      console.log(response.data);
    } catch (error) {
      console.warn(error);
      toast('Error', {
        className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <MessageCircleIcon />,
      });
    }
  }

  // console.log(projectdata);

  // if (!projectdata || projectdata.length === 0) {
  //   return (
  //     <div className="w-full h-[10%] flex justify-center items-center">
  //       <AddProComponent />
  //     </div>
  //   )
  // }

  useEffect(() => {
    fetchprojects();
  }, []);

  return (
    <>

      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-full h-[10%] flex justify-center items-start px-10">
          <AddProComponent fetchprojects={fetchprojects} />
        </div>
        {
          prodata.map((data, index) => (
            <ProjectCard title={data.title} desc={data.desc} key={data._id || index} cover={data.covImg} link={data.link} id={data._id} />
          ))
        }
      </div >

    </>

  );
}

export default Projects;