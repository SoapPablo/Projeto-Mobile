import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuscarEventos from '../screens/BuscarEventos';
import CriaEventos from '../screens/CriaEventos';
import Perfil from '../screens/Perfil';
import AppRoot from '../screens/MeusEventos';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NavegacaoAba = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        style: { backgroundColor: '#800080' },
      }}>
      <Tab.Screen
        name="Buscar Eventos"
        component={BuscarEventos}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Meus Eventos"
        component={AppRoot}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Criar Eventos"
        component={CriaEventos}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus" size={24} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavegacaoAba;
