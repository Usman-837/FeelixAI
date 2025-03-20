import React from 'react'
import TimeQueriesGraph from './TimeQueriesGraph'

const TimeQueries = () => {
    return (
        <section className='max-w-[45%] max-md:max-w-[100%] w-full border border-[#CFD3D8] rounded-lg'>
            <h1 className='text-base font-semibold text-[#1D2129] p-3 border-b border-[#CFD3D8]'>Time to Resolve Queries</h1>
            <div className='px-3'>
                <TimeQueriesGraph />
            </div>
        </section>
    )
}

export default TimeQueries
