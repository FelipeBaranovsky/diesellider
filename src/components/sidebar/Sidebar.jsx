import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, DrawerLayoutAndroid } from 'react-native';

const Sidebar = () => {
  let drawerRef = null;

  const openDrawer = () => {
    drawerRef.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.closeDrawer();
  };

  const renderSidebar = () => {
    return (
      <View style={styles.sidebarContainer}>
        <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
        <Text style={styles.sidebarText}>Sidebar</Text>
      </View>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={(ref) => (drawerRef = ref)}
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={renderSidebar}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer} style={styles.openButton}>
          <Text style={styles.openButtonText}>Abrir Sidebar</Text>
        </TouchableOpacity>
        <Text>Contenido Principal</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginBottom: 20,
  },
  openButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  sidebarContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20,
  },
  closeButton: {
    marginBottom: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  sidebarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Sidebar;
