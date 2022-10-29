import * as  React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Navbar } from './components';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
 

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

  return (
    <div className='bg-[#1D1f57] h-screen'>
        <div className='bg-[#1D1f57] w-full overflow-hidden'>
          <div className='sm:px-16 px-6 flex justify-center items-center '>
            <div className='xl:max-w-[1280px] w-full'>
              <Navbar />
              </div>
          </div>
        </div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className="" centered value={value} onChange={handleChange}  aria-label="basic tabs example">
          <Tab label="Monthly" {...a11yProps(0)} />
          <Tab label="Annualy" {...a11yProps(1)} />
          <Tab label="Other" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
           <PricingTable  highlightColor='#1976D2'>
    <PricingSlot  buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
        <PricingDetail> <h4 className='text-2xl'><b>15</b> projects</h4></PricingDetail>
        <PricingDetail> <h4><b>15</b> projects</h4></PricingDetail>
        <PricingDetail> <h4><b>15</b> projects</h4></PricingDetail>
        <PricingDetail ><h4><b>15</b> projects</h4></PricingDetail>
    </PricingSlot>


</PricingTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>

    </div>
  );
}
