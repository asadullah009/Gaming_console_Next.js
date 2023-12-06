import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import Organizer from '../organizer'

const GeneralSettings = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('general')

  const handleChangeTab = (event: any, newValue: React.SetStateAction<string>) => {
    setActiveTab(newValue)
  }

  return (
    <>
      <Organizer />
      <div
        style={{
          backgroundColor: '#000',
          paddingLeft: '5rem',
          paddingRight: '5rem'
        }}
      >
        <Typography
          variant='h6'
          gutterBottom
          sx={{
            padding: '1rem',
            marginTop: '5rem'
          }}
        >
          General Settings
        </Typography>

        <TabContext value={activeTab}>
          <Box sx={{ width: '100%' }}>
            <Tabs value={activeTab} onChange={handleChangeTab} indicatorColor='primary' textColor='primary'>
              <Tab label='General' value='general' />
              <Tab label='Detail' value='detail' />
              <Tab label='Contact' value='contact' />
            </Tabs>
          </Box>

          <TabPanel value='general'>
            <form>
              <TextField
                label='Name'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Complete Name'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Discipline'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Platform'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Organizer'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Website Link'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Size'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <input type='file' accept='image/*' id='logo-upload' style={{ display: 'none' }} />
              <label htmlFor='logo-upload'>
                <Button variant='outlined' component='span'>
                  Upload Logo
                </Button>
              </label>
              <div>
                <RadioGroup row>
                  <FormControlLabel
                    value='yes'
                    control={<Radio />}
                    label='Played on Internet'
                    defaultChecked
                    color='#fff'
                  />
                  <FormControlLabel value='no' control={<Radio />} label='Not Played on Internet' />
                </RadioGroup>
              </div>
              <TextField
                label='Location'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Country'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Start Time'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='End Time'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Timezone'
                fullWidth
                margin='normal'
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <Button variant='contained' color='primary'>
                Update
              </Button>
            </form>
          </TabPanel>

          <TabPanel
            value='detail'
            sx={{
              height: '90vh'
            }}
          >
            <form>
              <TextField
                label='Description'
                fullWidth
                margin='normal'
                multiline
                rows={5}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Prize'
                fullWidth
                margin='normal'
                multiline
                rows={6}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <TextField
                label='Rules'
                fullWidth
                margin='normal'
                multiline
                rows={8}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '5px'
                }}
              />
              <Button variant='contained' color='primary'>
                Update
              </Button>
            </form>
          </TabPanel>

          <TabPanel
            value='contact'
            sx={{
              height: '90vh'
            }}
          >
            <TextField
              label='Contact Email'
              fullWidth
              margin='normal'
              sx={{
                backgroundColor: '#fff',
                borderRadius: '5px'
              }}
            />
            <TextField
              label='Discover invite link'
              fullWidth
              margin='normal'
              sx={{
                backgroundColor: '#fff',
                borderRadius: '5px'
              }}
            />
            <Button variant='contained' color='primary'>
              Update
            </Button>
          </TabPanel>
        </TabContext>
      </div>
    </>
  )
}

export default GeneralSettings
GeneralSettings.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
