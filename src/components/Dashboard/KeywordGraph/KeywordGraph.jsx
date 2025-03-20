import React from 'react'
import KeywordLineGraph from './KeywordLineGraph'

const KeywordGraph = () => {
    return (
        <section className='max-w-[55%] max-md:max-w-[100%] w-full border border-[#CFD3D8] rounded-lg'>
            <h1 className='text-base font-semibold text-[#1D2129] p-3 border-b border-[#CFD3D8]'>Keyword Graph</h1>
            <div className='px-3'>
                <KeywordLineGraph/>
            </div>
        </section>
    )
}

export default KeywordGraph
