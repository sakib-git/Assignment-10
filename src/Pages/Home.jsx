
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Section from '../Components/Section';
import LatestBills from '../Components/LatestBills';
import { AuthContext } from '../Provider/AuthProvider';
import Section2 from '../Components/Section2';

const Home = () => {

  return (
    <div>
   
    <div className='mx-auto max-w-[1440px]  '>
  <title>Home</title>
      <div className=' max-xl:px-5 mt-40'>
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
           <div>
        <Section2></Section2>
       </div>
    </div>
    
  );
};

export default Home;