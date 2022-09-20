import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TComponentes.css';

function TComponentes() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar className='cortab' position="static">
          <Tabs className='espaco' centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className='corbarra' label="Todos produtos disponiveis" value="1"/>
            <Tab className='corbarra' label="Logo da Marca" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >

        </TabPanel>
        <TabPanel value="2">
          <Typography align="center"><img className='margem' src="https://media.discordapp.net/attachments/1001812118422695987/1019724932269228042/logo_PLegal.png?width=652&height=635" alt="logo" /></Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TComponentes;