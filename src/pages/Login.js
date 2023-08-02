import React, { useEffect, useState } from 'react'
import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { HeaderContext } from '../hooks/HeaderContext';
import Imagen from '../../public/assets/images/LogoDL5.png'
import {Picker} from '@react-native-picker/picker';
import { Icon, TextInput } from '@react-native-material/core';
import { Dimensions } from 'react-native';
import OrientationChangeListener from '../components/OrientationChangeListener';


const Login = () => {
  const [typeId, setTypeId] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [modal, handleModal, actualPage, handleActualPage] = React.useContext(HeaderContext)
  const screenWidth = Dimensions.get('window').width;
  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height)


  const navigation = useNavigation()
  let completed = (password === "" || userId === "" || typeId === "")


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChangePassword = (event) => {
    setPassword(event.target?.value);
  }
  const handleChangeType = (event) => {
    setTypeId(event.target?.value);
  };
  const handleChangeId = (event) => {
    setUserId(event.target?.value);
  };

  const handleLogIn = () => {
    //Comprobar

    handleActualPage("Productos")
    navigation.navigate("Productos");
  }

  return (
    <>
      <View style={styles.container}>
        <OrientationChangeListener>
        {({  isLandscape, windowWidth, windowHeight }) => (
          <>
          <View style={[styles.form]}>
            <View>
              <Image
                style={styles.logoImage}
                source={require('../../public/assets/images/LogoDL5.png')}
              />
            </View>
              <View style={{textAlign:"center", alignItems:"center"}}>
                <Text style={{fontSize:30,fontFamily:"Roboto", fontWeight:900, color:"#001f36", letterSpacing: 5, marginTop:10}}>
                  Inicia Sesión
                </Text>
              </View>
              <View style={{marginTop:20}}>
                <View>
                  <Picker
                    style={[styles.inputs,{width: !isLandscape ? windowWidth * 0.8 : windowWidth*0.6}]}
                    selectedValue={typeId}
                    onValueChange={handleChangeType}
                  >
                    <Picker.Item label="C.U.I.T." value="C.U.I.T." />
                    <Picker.Item label="C.N.P.J." value="C.N.P.J." />
                    <Picker.Item label="R.F.C." value="R.F.C." />
                    <Picker.Item label="R.U.T." value="R.U.T." />
                  </Picker>
                </View>
                <View style={{marginTop:20}}>
                  <TextInput
                    style={[styles.inputs,{width: !isLandscape ? windowWidth * 0.8 : windowWidth*0.6}]}
                    onChangeText={handleChangeId}
                    value={userId}
                    placeholder="Identificación Tributaria"
                    keyboardType="numeric"
                  />              
                </View>
              
                <View style={{ marginTop: 20 }}>
                <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    style={[styles.inputs, { paddingRight: 40 },{width: !isLandscape ? windowWidth * 0.8 : windowWidth*0.6}]}
                    onChangeText={handleChangePassword}
                    value={password}
                    placeholder="Contraseña"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={{ position: 'absolute',right: 10 }}
                    onPress={handleClickShowPassword}
                  >
                    <Image
                      style={styles.eyeImage}
                      source={require('../../public/assets/images/LogoDL5.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              

              <View style={{marginTop:20}}>
                <TouchableOpacity style={styles.bttn} onPress={handleLogIn}>
                  <Text style={{fontSize:30, fontWeight:700, fontFamily:"Roboto", color:"white"}}>INICIAR SESION</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </>
        )}
        </OrientationChangeListener>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1c5560",
      flex:1,
    },
    form: {
      backgroundColor: "#fbffcd",
      shadowRadius: 12,
      borderRadius: 8,
      padding:20,
      alignItems: "center",
    },
    inputs: {
      backgroundColor: "#e2e2e2",
    },
    logoImage: {
      width: 90,
      height:80,
    },
    eyeImage: {
      width: 20,
      height:20,
    },
    bttn: {
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#1c5560",
      borderRadius:8,
      justifyContent:"center",
      padding: 20,
      
    }
});

export default Login