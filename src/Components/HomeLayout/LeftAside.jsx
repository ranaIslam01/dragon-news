import React, { Suspense } from 'react';
import Categories from './Categories';
import { HashLoader } from 'react-spinners';
import LeftSideCard from './LeftSideCard';

const LeftAside = () => {
   return (
      <div>
         <Suspense fallback = {<HashLoader></HashLoader>}>
            <Categories></Categories>
         </Suspense>
         <LeftSideCard></LeftSideCard>
      </div>
   );
};

export default LeftAside;