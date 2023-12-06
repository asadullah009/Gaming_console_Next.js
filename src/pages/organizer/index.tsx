import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { IoWalletSharp } from 'react-icons/io5'
import Link from 'next/link'
import { Avatar, Divider } from '@mui/material'
import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Organizer = () => {
  const balance = ['Deposite', 'Withdraw']

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const [anchorElBalance, setAnchorElBalance] = React.useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleOpenUserMenuBalance = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBalance(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
    setAnchorElBalance(null)
  }
  return (
    <>

    <AppBar
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        boxShadow: 'none',
        borderBottom: '1px solid #45f884',
        padding: '10px 80px',
        height: '80px',
        position: 'stscicky'
      }}
    >
      <Toolbar>
        <Typography variant='h3' component='div' sx={{ flexGrow: 6, color: '#45f884', fontFamily: 'cursive' }}>
          O<span style={{ color: '#fff' }}>rgan</span>izer
        </Typography>

        {/* <Link href='/wallet'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            Wallet
          </Button>
        </Link>*/}
        <Link href='/ProjectView'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            Project
          </Button>
        </Link>
        <Link href='/OverView'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            OverView
          </Button>
        </Link>
        <Link href='/chatscreen'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            Chat
          </Button>
        </Link>
        <Link href='/generalsetting'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            General Setting
          </Button>
        </Link>
        <Link href='/Participant'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            Participant
          </Button>
        </Link>
        <Link href='/ranking'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            Final Standing
          </Button>
        </Link>
        <Link href='/tournaments'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            Tournament
          </Button>
          </Link>
        {/* <Link href='/organizer-account-settings'>
          <Button
            color='inherit'
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884'
              }
            }}
          >
            Profile Setting
          </Button>
        </Link> */}

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Account settings'>
            <Button
              color='inherit'
              onClick={handleOpenUserMenu}
              sx={{
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: '300',
                '&:hover': {
                  color: '#45f884'
                }
              }}
            >
              <Avatar alt='Remy Sharp' src='\images\avatars\1.png' sx={{ width: 40, height: 40 }} />
            </Button>
          </Tooltip>
          <Menu
            sx={{
              mt: '45px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Avatar alt='Remy Sharp' src='\images\avatars\1.png' sx={{ width: 40, height: 40 }} />
                <Typography>john deo</Typography>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseUserMenu}>
              <Link href='/user-account-settings'>
                <Typography textAlign='center'>Account Settings</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link href='/ResultsPage'>
                <Typography textAlign='center'>Tournaments</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link href='/'>
                <Typography textAlign='center'>Logout</Typography>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Organizer

Organizer.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

// import { SyntheticEvent, useState } from 'react';
// import { ReactNode } from 'react';
// import BlankLayout from 'src/@core/layouts/BlankLayout';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';
// import { styled } from '@mui/material/styles';
// import MuiTab, { TabProps } from '@mui/material/Tab';
// import 'react-datepicker/dist/react-datepicker.css';
// import ProjectPage from './OrganizerView/ProjectView/page';
// import GameOverview from './OverView/page';
// import GeneralSettings from './generalsetting/page';
// import ParticipantPage from './Participant/page';
// import ChatScreen from './chatscreen/page';
// import FinalResultsPage from './ranking/pages';
// import Link from 'next/link';
// import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown';
// import Dropdown from './dropdown';
// import Wallet from './wallet/page';
// import MyTournament from './tournaments/page';
// import { Tournament } from 'mdi-material-ui';

// const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
//   [theme.breakpoints.down('md')]: {
//     minWidth: 200,
//   },
//   [theme.breakpoints.down('sm')]: {
//     minWidth: 67,
//   },
//   '&:hover': {
//     backgroundColor: '#ddd'
//     },
// }));

// const TabName = styled('span')(({ theme }) => ({
//   lineHeight: 1.71,
//   fontSize: '0.875rem',
//   textAlign:'left',
//   marginLeft: theme.spacing(2.4),
//   [theme.breakpoints.down('md')]: {
//     display: 'none',
//   },
// }));

// const Organizer = () => {
//   const [value, setValue] = useState<string>('overview');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleChange = (event: SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//     setSidebarOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//       <Box sx={{
//         display:'flex',
//         justifyContent:'space-between',
//         alignItems:'center',
//         padding:'0 20px'
//       }}>

//       <Typography variant="h5" sx={{ p:5, bgcolor: '#f5f5f5'  }}>
//         Organizer Panel
//       </Typography>
//       <Dropdown />
//       </Box>
//       <Box sx={{ display: 'flex', flex: 1, }}>
//         <Box
//           component="aside"
//           sx={{
//             width: '250px',
//             textAlign:'left',
//             flexShrink: 0,
//             bgcolor: '#f5f5f5',
//             borderRight: '1px solid #ddd',
//             overflowY: 'auto',
//             display: { xs: sidebarOpen ? 'block' : 'none', md: 'block' },
//             color: '#000',

//           }}
//         >
//           <TabContext value={value} >
//             <TabList
//               orientation="vertical"
//               onChange={handleChange}
//               aria-label="account-settings tabs"

//             >
//               <Tab
//                 value="overview"
//                 label={<TabName
//                   sx={{
//                     color: value === 'overview' ? '#fff' : '#333',
//                   }}
//                 >Project</TabName>}
//                 sx={{
//                   backgroundColor: value === 'overview' ? '#45f884' : 'transparent',
//                 }}
//               />
//               <Tab
//                 value="account"
//                 label={<TabName
//                   sx={{
//                     color: value === 'account' ? '#fff' : '#333',
//                   }}
//                 >OverView</TabName>}
//                 sx={{
//                   backgroundColor: value === 'account' ? '#45f884' : 'transparent',
//                 }}
//               />
//               <Tab
//                 value="tournament"
//                 label={<TabName
//                   sx={{
//                     color: value === 'tournament' ? '#fff' : '#333',
//                   }}
//                 >MyTournaments</TabName>}
//                 sx={{
//                   backgroundColor: value === 'chat' ? '#45f884' : 'transparent',
//                 }}
//               />
//               <Tab
//                 value="chat"
//                 label={<TabName
//                   sx={{
//                     color: value === 'chat' ? '#fff' : '#333',
//                   }}
//                 >Chat</TabName>}
//                 sx={{
//                   backgroundColor: value === 'chat' ? '#45f884' : 'transparent',
//                 }}
//               />
//               <Tab
//                 value="security"
//                 label={<TabName
//                   sx={{
//                     color: value === 'security' ? '#fff' : '#333',
//                   }}
//                 >General setting</TabName>}
//                 sx={{
//                   backgroundColor: value === 'security' ? '#45f884' : 'transparent',
//                 }}
//               />
//               <Tab
//                 value="info"
//                 label={<TabName
//                   sx={{
//                     color: value === 'info' ? '#fff' : '#333',
//                   }}
//                 >Participant</TabName>}
//                 sx={{
//                   backgroundColor: value === 'info' ? '#45f884' : 'transparent',
//                 }}
//               />
//               <Tab
//                 value="final"
//                 label={<TabName
//                   sx={{
//                     color: value === 'final' ? '#fff' : '#333',
//                   }}
//                 >Final Standing</TabName>}
//                 sx={{
//                   backgroundColor: value === 'final' ? '#45f884' : 'transparent',
//                 }}
//               />
//               <Tab
//                 value="Wallet"
//                 label={<TabName
//                   sx={{
//                     color: value === 'Wallet' ? '#fff' : '#333',
//                   }}
//                 >Wallet</TabName>}
//                 sx={{
//                   backgroundColor: value === 'Wallet' ? '#45f884' : 'transparent',
//                 }}
//               />
//               {/* <Tab
//                 value="Home"
//                 label={
//                   <Link href="/">
//                     <TabName>Home</TabName>
//                   </Link>
//                 }
//                 sx={{
//                   backgroundColor: value === 'Home' ? '#45f884' : 'transparent',
//                 }}
//               /> */}
//             </TabList>
//           </TabContext>
//         </Box>

//         <Box sx={{ flex: 1 }}>
//           <Card>
//             <TabContext value={value}>
//               <TabPanel sx={{ p: 0 }} value="overview">
//                 <ProjectPage />
//               </TabPanel>
//               <TabPanel sx={{ p: 0 }} value="account">
//                 <GameOverview />
//               </TabPanel>
//               <TabPanel sx={{ p: 0 }} value="chat">
//                 <ChatScreen />
//               </TabPanel>
//               <TabPanel sx={{ p: 0 }} value="security">
//                 <GeneralSettings />
//               </TabPanel>
//               <TabPanel sx={{ p: 0 }} value="info">
//                 <ParticipantPage />
//               </TabPanel>
//               <TabPanel sx={{ p: 0 }} value="final">
//                 <FinalResultsPage />
//               </TabPanel>
//               <TabPanel sx={{ p: 0 }} value="Wallet">
//                 <Wallet />
//               </TabPanel>
//               <TabPanel sx={{ p: 0 }} value="tournament">
//                 <MyTournament />
//               </TabPanel>
//             </TabContext>
//           </Card>
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           position: 'fixed',
//           bottom: '20px',
//           left: '20px',
//           zIndex: 999,
//         }}
//       >
//         <button onClick={toggleSidebar}>Toggle Sidebar</button>
//       </Box>
//     </Box>
//   );
// };

// export default Organizer;

// Organizer.getLayout = (page: ReactNode) => (
//   <BlankLayout>{page}</BlankLayout>
// );
