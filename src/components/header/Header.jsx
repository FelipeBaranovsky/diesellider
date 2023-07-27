/* Header Component */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import Imagen from '../../../public/assets/images/LogoDL4.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HeaderContext } from '../../hooks/HeaderContext';
import UserModal from '../modals/UserModal';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigation } from '@react-navigation/native';


const Header = ({active}) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [modal, handleModal, actualPage, handleActualPage] = useContext(HeaderContext)
  const navigation = useNavigation()
  const pages = ['Servicios', 'Consultas', 'Contacto'];
  console.log(actualPage);
 
  const handleProfile = () => {
    handleModal()
    handleCloseUserMenu()
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

  const handleOpenProductMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleCloseProductMenu = () => {
    setAnchorElProducts(null);
  };

  const swapPage = (toPage) => {
    handleActualPage(toPage)
    navigation.navigate(toPage);
  }

  const swapPageProduct = (toPage) => {
    handleCloseProductMenu()
    handleActualPage("Productos")
    navigation.navigate(toPage);
  }

  

  return (
    <>
      {actualPage !== "Login" && (
        <AppBar position="static" style={{height:60, alignItems:"center", justifyContent:"center", padding:2, backgroundColor:"#001f36"}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <View style={{marginRight:20}}>
                <Link to={{ screen: 'Productos'}}  >
                  <img
                    src={Imagen}
                    style={styles.logoImage}
                  />
                </Link>
              </View>
              
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Box sx={{ flexGrow: 0 }}>
                    <Button
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      onClick={handleOpenProductMenu}
                      style={{color:(actualPage === "Productos") ? "#79ae92" : ""}}
                    >
                      Productos
                    </Button>
                  <Menu
                    sx={{ mt: '40px', ml:"70px" }}
                    anchorEl={anchorElProducts}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElProducts)}
                    onClose={handleCloseProductMenu}
                  >
                    <MenuItem onClick={() => swapPageProduct("Productos")}>
                      <Typography textAlign="center">Catálogo</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => swapPageProduct("Novedades")}>
                      <Typography textAlign="center">Novedades</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => swapPageProduct("Ofertas")}>
                      <Typography textAlign="center">Ofertas</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => swapPageProduct("Precios")}>
                      <Typography textAlign="center">Lista de Precios</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      onClick={() => swapPage(page)}
                      style={{color:(actualPage === page) ? "#79ae92" : ""}}
                    >
                      {page}
                    </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Configuración de Usuario">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon style={{color:"white", fontSize:45}} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '40px' }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => handleProfile()}>
                    <Typography textAlign="center">Perfil</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Cerrar Sesión</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
          {modal && <UserModal/>}
        </AppBar>
      )}




      {/* <View style={styles.container}>

      <View>
        <Link to={{ screen: 'Productos'}}>
          <Image
            style={styles.logoImage}
            source={{uri:Imagen}}
          />
        </Link>
      </View>

      <View style={styles.rightContainer}>
          <Link to={{ screen: 'Productos'}} style={[styles.button, {backgroundColor: actualPage === "Products" ? "#b0b1b5" : "#cfd0d4"}]} onPress={() => handleActualPage("Products")}>
            <Text style={styles.buttonText}>Productos</Text>
          </Link>
          <Link to={{ screen: 'Consultas'}} style={[styles.button, {backgroundColor: actualPage === "Querys" ? "#b0b1b5" : "#cfd0d4"}]} onPress={() => handleActualPage("Querys")}>
                <Text style={styles.buttonText}>Consultas</Text>
          </Link>
          <Link to={{ screen: 'Servicios'}} style={[styles.button, {backgroundColor: actualPage === "Services" ? "#b0b1b5" : "#cfd0d4"}]} onPress={() => handleActualPage("Services")}>
              <Text style={styles.buttonText}>Servicios</Text>
          </Link>
          <Link to={{ screen: 'Contacto'}} style={[styles.button, {backgroundColor: actualPage === "Contact" ? "#b0b1b5" : "#cfd0d4"}]} onPress={() => handleActualPage("Contact")}>
              <Text style={styles.buttonText}>Contacto</Text>
          </Link>
          <Link to={{ screen: 'Pedido'}} style={[styles.button, {backgroundColor: actualPage === "Order" ? "#b0b1b5" : "#cfd0d4"}]} onPress={() => handleActualPage("Order")}>
              <Text style={styles.buttonText}>Pedido</Text>
          </Link>
          <AccountCircleIcon style={styles.user} onClick={() => handleModal()}/>
      </View>
      {modal && <UserModal/>}

    </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    height: 80,
    backgroundColor: 'white',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginLeft: 8,
    borderRadius: 4,
  },
  user: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginLeft: 8,
    borderRadius: 4,
    fontSize:40, 
    color:"#cfd0d4",
    cursor: "pointer"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  logoImage: {
    width: 80,
  }
});

export default Header;
