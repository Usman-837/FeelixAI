import React from "react";
import SentimentTrengsGraph from "./SentimentTrengsGraph";


const SentimentTrends = () => {
    return (
        <section className='max-w-[55%] max-md:max-w-[100%] w-full border border-[#CFD3D8] rounded-lg'>
            <h1 className='text-base font-semibold text-[#1D2129] p-3 border-b border-[#CFD3D8]'>Customer Sentiment Trends</h1>
            <div className='p-3'>
                <SentimentTrengsGraph/>
            </div>
        </section>
    )
}

export default SentimentTrends
