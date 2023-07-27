/* Modal para mostrar la info asociada a una propuesta */
import React, { useContext } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { HeaderContext } from '../../hooks/HeaderContext';
import { View } from 'react-native';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';


const UserModal = () => {
    const [modal, handleModal, actualPage, handleActualPage] = useContext(HeaderContext)

    //Diseño Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#d1dcf0',
        boxShadow: 24,
        outline: "none",
        borderRadius: 5,
        p: 2,
      };    

  return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modal}
            onClose={handleModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >
            <Fade in={modal}>
                <Box sx={style}>
                    <View style={{ alignItems:"flex-end"}}>
                        <CancelIcon style={{ cursor: "pointer", color: "#520b0e" }} onClick={handleModal} />
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{alignItems:"center", justifyContent:"center"}}>
                            <AccountCircleIcon style={{fontSize:150}}/>
                        </View>
                        
                        <View style={{flex:1}}>
                            <Typography id="transition-modal-title" variant="h5" component="h1" style={{fontWeight: 'semibold',fontFamily: 'Roboto', textAlign:"center"}}>
                                USUARIO
                            </Typography>
                            <View style={{}}>
                                <View style={{flexDirection:"row", justifyContent:"space-between", width:300}}>
                                    <View style={{flex:1,flexDirection:"row", alignItems:"center"}}>
                                        <CircleIcon style={{fontSize:12, marginRight:10}}/>
                                        <Typography id="transition-modal-description" style={{fontWeight: 'normal',fontFamily: 'Roboto', fontSize:12}}>
                                            CUIT
                                        </Typography>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <CircleIcon style={{fontSize:12, marginRight:10}}/>
                                        <Typography id="transition-modal-description" style={{fontWeight: 'normal',fontFamily: 'Roboto', fontSize:12}}>
                                            Codigo de cliente
                                        </Typography>
                                    </View>
                                </View>
                                
                            </View>
                                                
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:20}}>
                                <Button style={{}}>Cambiar Contraseña</Button>
                                <Button>Cerrar Sesión</Button>
                            </View>
                        
                        </View>
                    </View>
                </Box>
            </Fade>
        </Modal>
  )
}

export default UserModal