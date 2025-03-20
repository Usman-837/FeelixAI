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
import KeywordGraph from '../../components/Dashboard/KeywordGraph/KeywordGraph'
import CustomerQueries from '../../components/Dashboard/CustomerQueries/CustomerQueries'
import TopKeywords from '../../components/Dashboard/TopKeywords/TopKeywords'
import TimeQueries from '../../components/Dashboard/TimeQueries/TimeQueries'

const Dashboard = () => {
  return (
    <section className="p-5 flex flex-col gap-5 overflow-auto custom-scrollbar h-[calc(100vh-50px)] pt-28">
      <div className="flex items-center max-sm:flex-col max-sm:gap-4 justify-between">
        <div className="flex gap-4 max-sm:gap-2 max-smallmobile:grid max-smalllaptop:grid-cols-2">
          <SelectTime />
          <SelectChat />
          <SelectNeutral />
          <SelectLaptops />
        </div>
        <div>
          <ResetFilters />
        </div>
      </div>
      <div className="w-full flex gap-4 max-md:flex-col">
        <SentimentTrends />
        <ChatRating />
      </div>
      <div className="w-full flex gap-4 max-md:flex-col">
        <EmotionAnalysis />
        <ResolvedQueries />
      </div>
      <div className="w-full flex gap-4 max-md:flex-col">
        <KeywordGraph />
        <CustomerQueries />
      </div>
      <div className="w-full flex gap-4 max-md:flex-col">
        <TopKeywords />
        <TimeQueries />
      </div>
    </section>
  );
}

export default Dashboard
