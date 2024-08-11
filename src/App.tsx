import React from 'react';

import MenuSection from './sections/MenuSection';
import PageSection from './sections/PageSection';

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-background-blue flex flex-col items-stretch overflow-clip" > 
      <div className='w-[100%] h-[7vh]'>
        <MenuSection/>
      </div>
      <div className='flex h-[93vh] justify-center px-60 overflow-clip'>
        <PageSection/>
      </div>
    </div>
  );
}

export default App;
