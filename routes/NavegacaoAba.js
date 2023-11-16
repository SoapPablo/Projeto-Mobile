import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuscarEventos from '../screens/BuscarEvento';
import CriaEventos from '../screens/CriarEventos';
import Perfil from '../screens/Perfil';
import AppRoot from '../screens/MeusEventos';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NavegacaoAba = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'purple',
        style: { backgroundColor: 'purple' },
      }}>
      <Tab.Screen
        name="Buscar Eventos"
        component={BuscarEventos}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={'purple'} />
          ),
        }}
      />
      <Tab.Screen
        name="Meus Eventos"
        component={AppRoot}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={24} color="purple" />
          ),
        }}
      />
      <Tab.Screen
        name="Criar Eventos"
        component={CriaEventos}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus" size={24} color={'purple'} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={() => <Perfil onLogout={props.onLogout}/>}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={24} color="purple" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavegacaoAba;
