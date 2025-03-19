import React from 'react'
import ResolvedQueriesLineChart from './ResolvedQueriesLineChart'

const ResolvedQueries = () => {
    return (
        <section className='max-w-[40%] max-md:max-w-[100%] w-full border border-[#CFD3D8] rounded-lg'>
            <h1 className='text-base font-semibold text-[#1D2129] p-3 border-b border-[#CFD3D8]'>Time Resolve Queries</h1>
            <div className='px-3'>
                <ResolvedQueriesLineChart/>
            </div>
        </section>
    )
}

export default ResolvedQueries
