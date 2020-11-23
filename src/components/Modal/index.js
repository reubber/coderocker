import React, {useState} from 'react';
import {Modal, TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
  
const useStyles=makeStyles((theme)=>({
  modal:{ 
    position: 'absolute',
    width: 500,
    height: 600,
    backgroundColor:'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    //padding: theme.spacing(2,4,3,4)
    padding: '16px 32px 24px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textfield: {
    width: '100%',
    margin: '10px 0',
  },
  button: {
    fontSize: '32px',
    fontWeight: 400,
    '&:hover': {
      color:'#ddd'
    },cursor:'pointer'
  },  
}))

function Modals() {
  const styles=useStyles()

  const [modal, setModal]=useState(false)

  const abrirModal = () => {
    setModal(!modal)
  }

  const body = (
    <div className={styles.modal}>
      
      <div align='center'>
        <h2 style={{color: '#F1A10A', margin: '20px'}}>Contact</h2>
      </div>
    
      <TextField label="nome" className={styles.textfield} placeholder='Fill your full name'/>
      <br />
      <TextField label="email" className={styles.textfield} placeholder='Fill your email'/>
      <br />
      <TextField label="phone" className={styles.textfield} placeholder='Fill ur phone'/>
      <br />
      <TextField
        label="Posts"
        className={styles.textfield}
        multiline
        rows={5}
        defaultValue=""
        variant="outlined"/>
      <br />

      <div align="center">
        <Button color='#2D2D2D'>Enviar</Button>
      </div>
    </div>
  )
  return (
    <>
      <p className={styles.button} onClick={()=>abrirModal()}>Contact</p>
      <Modal
        open={modal}
        onClose={abrirModal}>
          {body}  
      </Modal>
    </>
  )
}

export default Modals