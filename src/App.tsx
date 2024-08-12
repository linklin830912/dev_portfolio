import React from 'react';

import MenuSection from './sections/MenuSection';
import PageSection from './sections/PageSection';

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-background-blue flex flex-col items-stretch overflow-clip relative" > 
      
      <div className='bg-menu-blue w-5 hover:w-auto md:w-[100%] md:h-[7vh] overflow-hidden left-0 top-0 h-[100vh] absolute'>
        <MenuSection/>
      </div>
      <div className='flex h-[100vh] justify-center overflow-clip pl-6 lg:px-60  lg:pt-32'>
        <PageSection/>
      </div>
    </div>
  );
}

export default App;
