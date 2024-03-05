import React from 'react';
import TradingViewWidget from './TradingViewWidget';
import { FaArrowRight } from "react-icons/fa6";
import TrendingCoin from './TrendingCoin';
import Perform from '../component/PerformanceSection/Perform'
import Sentiment from '../component/Sentiment'
import About from '../component/About'
import Token from '../component/Token'
import Team from '../component/Team'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
        <div className='max-w-[1328px] flex flex-col md:flex-row mx-auto gap-4 mt-[132px] '>
            <div className='h-[711px] w-[881px] rounded-lg '>
                <TradingViewWidget/>
                <Perform/>
                <Sentiment/>
                <About/>
                <Token/>
                <Team/>
            </div>

            {/* Right Side  */}
            <div className='flex flex-col rounded-[16px] gap-[20px]'>
            <div className='w-[426px] h-[515px] p-[31px 16px 31px 16px] bg-[#0052FE] rounded-[8px] gap-[19px] flex flex-col items-center justify-center'>
                <div className='w-[327px] h-[182px] gap-[14px] flex flex-col items-center justify-center'>
                    <h2 className='w-[268px] h-[80px] text-white leading-10 text-center font-medium text-[24px]'>Get Started with KoinX for FREE</h2>
                    <p className='w-[327px] h-[68px] text-white font-inter text-[14px] font-medium leading-6 text-center'>With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.
                    </p>
                </div>
                
                <div className='w-[327px] h-[50px] text-[16px] bg-white text-black font-medium rounded-[8px] flex items-center justify-center gap-2'>
                    <div>Get Started for FREE</div>
                    <FaArrowRight/>
                </div>
            </div>
            <TrendingCoin/>
            </div>
        </div>
    </div>
  );
};

export default Home;