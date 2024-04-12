"use client"
import React from 'react'
import Supabase from '../supabasedb.js';
import { useState, useEffect } from 'react';

function page() {

    const [orglist, setOrglist] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await Supabase.from('chennai_table').select().eq('city', 'Mumbai') ;
            if (error) {
                console.log(error);
            } else {
                console.log("raw Data:" + JSON.stringify(data));
                setOrglist(data);
                console.log("after set:" + orglist);
            }
        }
        fetchData();
    }, []);


    return (

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {orglist.map((org, index) => (


                <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div className='flex flex-col'>

                        <a href="#">
                            <img className="rounded-t-lg w-full h-2/6" src={org.img_link} alt="" />
                        </a>

                        <div className='px-5 py-2'>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{org.org_name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{org.description}</p>

                        </div>
                    </div>

                    <div className="px-5 pb-5">
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

            ))}






        </div>
    )
}

export default page