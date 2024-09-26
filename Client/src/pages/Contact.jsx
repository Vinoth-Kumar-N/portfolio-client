
import React, { useRef, useState } from "react";
import { addComment } from "../services/api";
import axios from "axios";


const Contact = () => {
    const [commentdata, setcommentdata] = useState(null)
    const [statusMess, setstatusMess] = useState('');
    const nameref = useRef(null);
    const emailref = useRef(null);
    const messref = useRef(null);



    const handleSub = async (e) => {

        e.preventDefault();

        const data = {
            name: nameref.current.value,
            email: emailref.current.value,
            message: messref.current.value
        };

        try {
            setcommentdata(data);
            const res = await addComment(data);
            if (res.status === 200 || res.status === 201) {
                setstatusMess("Message sent successfully");
                console.log("mesage sent"+commentdata);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="h-[90vh] w-screen bg-black/15 flex justify-center items-center">
                <div className=" h-[55%] w-[30%] bg-red flex flex-col  bg-white  shadow-lg ">

                    <div className="w-full h-[15%] flex items-center justify-center px-10 border-2 text-purple-500 bg-white text-xl font-bold shadow-sm">
                        <div className="text-center">Email Me</div>
                    </div>

                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <form className="w-[80%] h-[90%] flex flex-col justify-center items-center gap-4" id="contact-form" onSubmit={handleSub}>
                            <input type="text" id="namef" ref={nameref} className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" placeholder="Name" required />
                            <input type="email" id="emailf" ref={emailref} className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" placeholder="Email" required />
                            <textarea name="messge" ref={messref} id="Comment" placeholder="Comment" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required>
                            </textarea>
                            <button type="submit"  className="text-white bg-slate-500 from-green-500 via-red-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-purple-100 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4" >Send</button>
                        </form>
                        <div className="">{statusMess}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;







































































































