import React from 'react'
import CustomerQueriesBar from './CustomerQueriesBar'

const CustomerQueries = () => {
    return (
        <section className='max-w-[45%] max-md:max-w-[100%] w-full border border-[#CFD3D8] rounded-lg'>
            <h1 className='text-base font-semibold text-[#1D2129] p-3 border-b border-[#CFD3D8]'>Types of Customer Queries</h1>
            <div className='px-3'>
                <CustomerQueriesBar/>
            </div>
        </section>
    )
}

export default CustomerQueries
