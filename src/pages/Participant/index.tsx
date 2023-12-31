import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Box } from 'mdi-material-ui'
// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import Organizer from '../organizer'
const ParticipantPage = () => {
  // Sample participant data
  const [participants, setParticipants] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', isPresent: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isPresent: false },
    { id: 3, name: 'John Doe asa', email: 'john@example.com', isPresent: true },
    { id: 4, name: 'Jane Smith asad', email: 'jane@example.com', isPresent: false },
    { id: 1, name: 'John Doe', email: 'john@example.com', isPresent: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isPresent: false },
    { id: 3, name: 'John Doe asa', email: 'john@example.com', isPresent: true },
    { id: 4, name: 'Jane Smith asad', email: 'jane@example.com', isPresent: false },
    { id: 1, name: 'John Doe', email: 'john@example.com', isPresent: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isPresent: false },
    { id: 3, name: 'John Doe asa', email: 'john@example.com', isPresent: true },
    { id: 4, name: 'Jane Smith asad', email: 'jane@example.com', isPresent: false }
    // Add more participants as needed
  ])

  // Calculate total and present size
  const totalSize = participants.length
  const presentSize = participants.filter(participant => participant.isPresent).length

  // State for the edit dialog
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editParticipant, setEditParticipant] = useState({})

  // Function to open the edit dialog
  const openEditDialog = (participant: React.SetStateAction<{}>) => {
    setEditDialogOpen(true)
  }

  // Function to close the edit dialog
  const closeEditDialog = () => {
    setEditDialogOpen(false)
  }

  // Function to handle edit participant
  const handleEditParticipant = () => {
    // Implement your edit logic here
    // Update the participant's data and close the dialog
    closeEditDialog()
  }

  // Function to handle delete participant
  const handleDeleteParticipant = (id: number) => {
    setParticipants(prevParticipants => prevParticipants.filter(p => p.id !== id))
  }

  return (
    <>
      <Organizer />
      <div
        style={{
          marginTop: '5rem',
          height: '90vh',
          paddingLeft: '5rem',
          backgroundColor: '#000',
        }}
      >
        <Card
          sx={{
            backgroundColor: '#000'
          }}
        >
          <CardContent>
            <Typography variant='h6' component='div'>
              Participant Sizes
            </Typography>
            <Typography variant='h3' color='text.secondary' sx={{ textAlign: 'center', color: '#45f884' }}>
              Total: {totalSize} | Present: {presentSize}
            </Typography>
          </CardContent>
        </Card>
        <Table
          sx={{
            backgroundColor: '#000'
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: '#fff'
                }}
              >
                participant Name
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff'
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff'
                }}
                align='center'
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map((participants, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    color: '#fff'
                  }}
                >
                  {participants.name}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff'
                  }}
                >
                  {participants.email}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff'
                  }}
                  align='center'
                >
                  <Button variant='contained' color='primary' onClick={() => openEditDialog()}>
                    Edit
                  </Button>
                  <Button variant='contained' color='secondary'>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Edit Participant Dialog */}
        <Dialog open={editDialogOpen} onClose={closeEditDialog}>
          <DialogTitle>Edit Participant</DialogTitle>
          <DialogContent>
            <TextField
              sx={{
                color: '#fff'
              }}
              label='Name'
              fullWidth
              margin='normal'
              value={editParticipant.name}
              onChange={e => setEditParticipant({ ...editParticipant, name: e.target.value })}
            />
            <TextField
              sx={{
                color: '#fff'
              }}
              label='Email'
              fullWidth
              margin='normal'
              value={editParticipant.email}
              onChange={e => setEditParticipant({ ...editParticipant, email: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeEditDialog} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleEditParticipant} color='primary'>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default ParticipantPage
ParticipantPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
