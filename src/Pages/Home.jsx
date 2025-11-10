import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Section from '../Components/Section';
import LatestBills from '../Components/LatestBills';

const Home = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
 
      <div className='mt-5 max-xl:px-5'>
        <Banner></Banner>
      </div>
       <div>
        <Category></Category>
       </div>
       <div>
        <LatestBills></LatestBills>
       </div>
       <div>
        <Section></Section>
       </div>
    </div>
  );
};

export default Home;