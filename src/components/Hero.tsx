import Spline from '@splinetool/react-spline';
import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LazyLoadedScene = React.lazy(() => import('./Scene'));

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full'>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyLoadedScene />
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;
