import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full'>
        <Spline scene='/src/hero.splinecode' />
      </div>
    </div>
  );
};

export default Hero;
