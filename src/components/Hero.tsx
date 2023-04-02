import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full'>
        <Spline
          style={{
            width: '100vw',
            height: '100vh',
          }}
          // scene='https://prod.spline.design/c0l34IxRyYOIiU4w/scene.splinecode'
          scene='/src/scene.splinecode'
        />
      </div>
    </div>
  );
};

export default Hero;
