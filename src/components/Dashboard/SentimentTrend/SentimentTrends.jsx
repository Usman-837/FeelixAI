import React from "react";
import SentimentChart from "./SentimentChart";


const SentimentTrends = () => {
    return (
        <section className='max-w-[60%] max-md:max-w-[100%] w-full border border-[#CFD3D8] rounded-lg'>
            <h1 className='text-base font-semibold text-[#1D2129] p-3 border-b border-[#CFD3D8]'>Customer Sentiment Trends</h1>
            <div className='p-3'>
                <SentimentChart />
            </div>
        </section>
    )
}

export default SentimentTrends
