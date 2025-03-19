import React from 'react'
import SelectTime from '../../components/Dashboard/Buttons/SelectTime/SelectTime'
import SelectChat from '../../components/Dashboard/Buttons/SelectChat/SelectChat'
import SelectNeutral from '../../components/Dashboard/Buttons/SelectNeutral/SelectNeutral'
import SelectLaptops from '../../components/Dashboard/Buttons/SelectLaptops/SelectLaptops'
import ResetFilters from '../../components/Dashboard/Buttons/ResetFilters/ResetFilters'
import SentimentTrends from '../../components/Dashboard/SentimentTrend/SentimentTrends'
import ChatRating from '../../components/Dashboard/ChatRating/ChatRating'
import EmotionAnalysis from '../../components/Dashboard/EmotionAnalysis/EmotionAnalysis'
import ResolvedQueries from '../../components/Dashboard/ResolvedQueries/ResolvedQueries'

const Dashboard = () => {
  return (
    <section className='p-5 flex flex-col gap-5 overflow-scroll custom-scrollbar'>
      <div className='flex items-center max-sm:items-start justify-between'>
        <div className='flex gap-4 flex-wrap max-sm:grid max-sm:grid-cols-3 max-smallmobile:grid-cols-2'>
          <SelectTime />
          <SelectChat />
          <SelectNeutral />
          <SelectLaptops />
        </div>
        <div>
          <ResetFilters />
        </div>
      </div>
      <div className='w-full flex gap-4 max-md:flex-col'>
        <SentimentTrends/>
        <ChatRating/>
      </div>
      <div className='w-full flex gap-4 max-md:flex-col'>
        <EmotionAnalysis/>
        <ResolvedQueries/>
      </div>
    </section>
  )
}

export default Dashboard
