import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Navbar, Footer, PriceCard} from './components'
import { useState } from 'react';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    const [domLoaded, setDomLoaded] = useState(false)

    React.useEffect(() => {
      setDomLoaded(true)

    }, [])
  

  return (
    <>
    {domLoaded && (
    <div className='bg-[#1D1f57]'>
      <div className="bg-[#1D1f57] sm:px-16 px-6 flex justify-center items-center"> 
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>
      
    <div className='flex justify-center flex-col items-center bg-[#1D1f57] sm:px-16 px-6 mt-[6%]'>
    <h3 className='text-white font-poppins text-[18px] '>
      All of our plans are commission-free with no hidden charges!</h3>
    <Box className='w-[90%] mt-[3%]'>
      <Box className='border-b-2 border-slate-500'>
        <Tabs
         centered indicatorColor="none" 
        value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color: 'white', paddingLeft: '10%', paddingRight: 
          '10%' }}
           label="Monthly" {...a11yProps(0)} />
          <Tab sx={{color: 'white', paddingLeft: '10%', paddingRight: '10%'}}
           label="Annually" {...a11yProps(1)} />
          <Tab sx={{color: 'white', paddingLeft: '10%', paddingRight: '10%'}}
           label="Other" {...a11yProps(2)} />
        </Tabs>
      </Box>
     
      <TabPanel value={value} index={0}>
        <PriceCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PriceCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='bg-[#1D1f57]  text-center md:text-left 
        md:flex-row max-w-7l ss:px-10 justify-evenly mx-auto items-center '>
          <div className='flex flex-col space-y-10 mt-10 bg-[#1D1f57] h-screen'>
            <h4 className='text-4xl font-semibold text-center text-white'>
                Contact Us
            </h4>
            <h2 className='ss:text-2xl font-medium text-center text-white'>
              Fill in the details below to contact us and we will  do our best to <br></br>  respond as quickly as possible.
            </h2>
          
            <form className='flex flex-col space-y-2 w-[100%] lg:w-[60%]  mx-auto bg-[#1D1f57]'>
                <div className='flex flex-col space-y-2 '>
                    <input placeholder='Full Name' className='contactInput' type="text" />
                    <input placeholder='Email' className='contactInput' type="text" />
                </div>

                <input placeholder='Subject' className='contactInput' type="text" />

                <textarea placeholder='Message' className='contactInput ' />
                <button 
                type='submit'
                className='bg-[#F7AB0A] py-5 px-10 rounded-mb text-black font-bold'>
                    Submit
                </button>
            </form>
          </div>
        </div>
      </TabPanel>
    </Box>
    </div>
    <div className='sm:px-16 px-6 bg-slate-400/5 mt-20'>
     <Footer /> 
    </div>
    
    </div>
    )}
    </>
    
  );
}