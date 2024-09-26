import { Trash, Link } from 'lucide-react'
import React from 'react'
import axios from 'axios';

const ProjectCard = ({ title, desc, cover, id, link }) => {



  // const handledelete = async (ide) => {
  //   try {
  //     const res = await deletepro(ide);
  //     if (res.status === 200) {
  //       console.log('deleted');
  //       toast('Deleted');
  //       fetchprojects();
  //     }
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }
  // const [titstate, settitstate] = useState(title);
  // const [descstate, setdescstate] = useState(desc);
  // const [linkstate, setlinkstate] = useState(link);
  // const [covimgstate, setcovimgstate] = useState(covimg);
  // const [visible, setvisible] = useState(false);

  return (
    <>
      <div className="w-[300px] h-[320px] shadow-xl cursor-pointer snap-start bg-[#f8f8f8] items-center transition-all duration-300 hover:bg-[#a7bbe2]">
        <img src={cover} alt={title} className="h-[150px] w-[100%] relative" />
        <p className="font-bold text-2xl group-hover:text-[#fdfdfd] text-black/90 px-6">
          {title}
        </p>
        <p className="text-gray-400 text-sm px-6 m-2">{desc}</p>
        <div className="h-[3rem] w-full flex flex-row gap-6 justify-end items-center p-6" >
          <a href={link} className="bg-slate-500 p-4 rounded-md">
            <div className="">
              <Link />
            </div>
          </a>
          <div className="bg-slate-500 p-4 rounded-md">
            <Trash />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard

