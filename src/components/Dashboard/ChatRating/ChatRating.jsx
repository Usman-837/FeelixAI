import React from 'react'
import ChatRatingbar from './ChatRatingbar'

const ChatRating = () => {
    return (
        <section className='max-w-[45%] max-md:max-w-[100%] w-full border border-[#CFD3D8] rounded-lg'>
            <h1 className='text-base font-semibold text-[#1D2129] p-3 border-b border-[#CFD3D8]'>Chat Rating Distribution</h1>
            <div className='px-3'>
                <ChatRatingbar/>
            </div>
        </section>
    )
}

export default ChatRating
