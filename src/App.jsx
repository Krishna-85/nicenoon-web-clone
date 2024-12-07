import React from 'react';
import Nav from './components/Nav';
import Section1 from './components/Section1';
import Section2 from './components/section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Minisec from './components/minisec';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Final from './components/Final';
 
 

const App = () => {
  return (
    <div className='main bg-[#E4E4E4]'>
      <Nav />
      <Section1/>
      <Section2/>
      <Section3/>
      <Minisec />
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
       <Final/>
       
    </div>
  );
};

export default App;