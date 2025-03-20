import React from 'react'
import EmotionAnalysisPiChart from './EmotionAnalysisPiChart'
import { LuPinOff } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import { FiMaximize2 } from "react-icons/fi";

const EmotionAnalysis = () => {

    const TableData = [
        {
            id: 1,
            chat: 'Chart 1',
            neutral: 'Neutral',
            des: 'Lorem ipsum sit amet'
        },
        {
            id: 2,
            chat: 'Chart 1',
            neutral: 'Neutral',
            des: 'Lorem ipsum sit amet'
        },
        {
            id: 3,
            chat: 'Chart 1',
            neutral: 'Neutral',
            des: 'Lorem ipsum sit amet'
        },
        {
            id: 4,
            chat: 'Chart 1',
            neutral: 'Neutral',
            des: 'Lorem ipsum sit amet'
        },
        {
            id: 5,
            chat: 'Chart 1',
            neutral: 'Neutral',
            des: 'Lorem ipsum sit amet'
        },
    ]


    return (
        <section className='max-w-[55%] max-md:max-w-[100%] w-full bg-[#F1FEFF] border border-[#CFD3D8] rounded-lg'>
            <div className='flex items-center justify-between p-3 border-b border-[#CFD3D8 max-md:items-start'>
                <h1 className='text-base font-semibold text-[#1D2129]]'>Customer Emotional Analysis</h1>
                <div className='text-[#111111] flex gap-x-4 font-semibold'>
                    <LuPinOff className='w-4 h-4' />
                    <FaMinus className='w-4 h-4' />
                    <FiMaximize2 className='w-4 h-4' />
                </div>
            </div>
            <div className='py-8 px-6 flex justify-between max-xl:flex-col-reverse max-xl:gap-5 max-xl:items-center'>
                <div className='max-w-[289px] w-full'>
                    <table className='w-full border-[1px] border-[#CFD3D8] rounded-md'>
                        {
                            TableData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td className='border-[1px] border-[#CFD3D8] py-1.5 px-2 text-sm max-smallmobile:text-xs text-[#1D2129]'>{data.chat}</td>
                                        <td className='border-[1px] border-[#CFD3D8] py-1.5 px-2 text-sm max-smallmobile:text-xs text-[#1D2129'>{data.neutral}</td>
                                        <td className='border-[1px] border-[#CFD3D8] py-1.5 px-2 text-sm max-smallmobile:text-xs text-[#1D2129'>{data.des}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                <div>
                    <EmotionAnalysisPiChart />
                </div>
            </div>
        </section>
    )
}

export default EmotionAnalysis
