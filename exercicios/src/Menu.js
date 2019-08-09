import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/CominicacaoDireta'
import TextoSincronizado from './componentes/CominicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: Flex,
        navigationOptions: {title:'Flex'}
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: {title:'ListaFlex'}
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: {title:'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },    
    Evento:{
        screen: Evento
    },
    ValidarProps:{
        screen: () => <ValidarProps ano={18}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador:{
        screen: () => <Contador numeroInicial ={1000}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Complicado: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300 })