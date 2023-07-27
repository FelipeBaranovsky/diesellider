import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { Button, IconButton, OutlinedInput, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigation } from '@react-navigation/native';
import { HeaderContext } from '../hooks/HeaderContext';
import Imagen from '../../public/assets/images/LogoDL5.png'


const Login = () => {
  const [typeId, setTypeId] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [modal, handleModal, actualPage, handleActualPage] = React.useContext(HeaderContext)

  const navigation = useNavigation()

  let completed = (password === "" || userId === "" || typeId === "")


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleChangeType = (event) => {
    setTypeId(event.target.value);
  };
  const handleChangeId = (event) => {
    setUserId(event.target.value);
  };

  const handleLogIn = () => {
    //Comprobar
    handleActualPage("Productos")
    navigation.navigate("Productos");
  }

  return (
    <>
      <View style={styles.container}>
    
        <View style={styles.form}>

            <View style={{textAlign:"center", alignItems:"center"}}>
              <img
                src={Imagen}
                style={styles.logoImage}
              />
              <Typography variant="h4" component="h2" style={{fontFamily:"Roboto", fontWeight:900, color:"#001f36", letterSpacing: 5, marginTop:10}}>
                Inicia Sesión
              </Typography>
              
            </View>
            
            <View style={{marginTop:20}}>
              <Box sx={{ minWidth: 120, width:400}}>

                <FormControl fullWidth style={{backgroundColor:"#E2E8F0"}}>
                  <InputLabel id="identificacion">Tipo de Identificación</InputLabel>
                  <Select
                    labelId="identificacion"
                    id="selectIdentificacion"
                    label="Tipo de Identificación"
                    onChange={handleChangeType}
                    style={{height:25, flex:1}}
                  >
                    <MenuItem value={0}>C.U.I.T.</MenuItem>
                    <MenuItem value={1}>C.N.P.J.</MenuItem>
                    <MenuItem value={2}>R.F.C.</MenuItem>
                    <MenuItem value={3}>R.U.T.</MenuItem>
                  </Select>
                </FormControl>

                <TextField fullWidth id="identificacionTributaria" label="Identificación Tributaria" variant="outlined" style={{marginTop:10, backgroundColor:"#E2E8F0"}} onChange={handleChangeId}/>
                
                <FormControl fullWidth style={{marginTop:10,backgroundColor:"#E2E8F0"}} variant="outlined">
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChangePassword}
                    endAdornment={
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    }
                    label="Contraseña"
                  />
                </FormControl>

              </Box>

              <View style={{padding:20}}>
                <Button disabled={completed} fullWidth variant="contained" style={{marginTop:10, height:50, backgroundColor:(completed) ? "#79ae92":"#1c5560"}} onClick={handleLogIn}>
                    <Typography variant="h9" component="h3" style={{fontFamily:"Roboto", fontWeight:900, color:"white"}}>Inicia Sesión</Typography>
                </Button>
              </View>

            </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#79ae92",
      flex:1,
    },
    form: {
      backgroundColor: "#fbffcd",
      shadowRadius: 12,
      borderRadius: 8,
      padding:20,
      alignItems: "center"
    },
    inputs: {
      padding: 4,
      marginTop: 20,
      height: 25,
      width: 300,
      fontFamily: "Roboto",
      fontSize: 15,
      borderRadius: 5,
      borderColor: "#cfd0d4"
    },
    logoImage: {
      width: 90,
    }
});

export default Login