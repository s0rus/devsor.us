import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <Spline
      style={{
        width: '100vw',
        height: '100vh',
      }}
      // scene='https://prod.spline.design/c0l34IxRyYOIiU4w/scene.splinecode'
      scene='/scene/scene.splinecode'
    />
  );
};

export default Hero;
