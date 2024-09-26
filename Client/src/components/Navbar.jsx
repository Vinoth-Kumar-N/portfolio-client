import { useState } from 'react';
import logImg from '../assets/img/LogIcon.png';
import { NavLink } from 'react-router-dom';
import '../assets/css/Home.css';
import { CircleX } from 'lucide-react';


const Navbar = () => {
    const NavLinks = [
        { title: "Home", path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
    ]
    const [visible, setVisible] = useState(true);
    return (
        <>
            {
                visible ? (
                    <nav className="h-16 w-full bg-[#f8f8f8] flex justify-between items-center">
                        <div className="ml-8">
                            <h1 className="text-3xl text-black font-bold">Portfolio</h1>
                        </div>
                        <div className="mr-20 flex ">
                            <ul className="flex">
                                {
                                    NavLinks.map((navdata, index) => (
                                        <NavLink key={index} to={navdata.path} className='active:border-b-4 border-transparent w-[5rem] mr-6'>
                                            <li className="font-bold text-xl text-purple-600 h-full rounded-sm flex justify-center items-center">{navdata.title}</li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                            <div onClick={() => setVisible(!visible)}>
                                <img className='w-[2rem] ml-[2rem] rounded-2xl ' src={logImg} alt="loginProfile" />
                            </div>
                        </div>

                    </nav>

                ) : (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-white flex justify-center items-center z-50 " >
                            <div className="h-3/6 w-[30%] flex flex-col justify-center items-center bg-[#f8f8f8] rounded-md shadow-2xl shadow-purple-600">
                                <div className=" w-full flex justify-between">
                                    <div className=" w-5/6 h-[1rem] text-center ml-[2rem]">
                                        <h3 className="font-monos text-black text-3xl font-bold">Login</h3>
                                    </div>
                                    <div className="w-1/6" onClick={() => setVisible(!visible)}>
                                        <CircleX />
                                    </div>
                                </div>
                                <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
                                    <input type="email" id="email" placeholder="Email" className="p-3 bg-[#f0eded] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
                                    <input type="password" id="password" placeholder="Password" className="p-3 bg-[#f0eded] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
                                    <button type="submit" className="w-full bg-purple-600 text-white p-3">Login</button>
                                </form>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}
export default Navbar;