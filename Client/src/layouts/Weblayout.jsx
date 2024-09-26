import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Weblayout = () => {
    const isloggedin = true

    return (
        <>
            <div className='h-screen w-screen overflow-x-hidden '>

                <Navbar />
                <div className=' w-full flex flex-col justify-center items-center'>

                    {isloggedin ? (
                        <Suspense fallback={"loading"}>
                            <Outlet />
                        </Suspense>

                    ) :
                        (
                            <>
                                Login to access data
                            </>
                        )

                    }
                </div>
            </div>
        </>
    )
}

export default Weblayout