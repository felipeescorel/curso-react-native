import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Joa55511212o', nota: 17.9 },
    { id: 11, nome: 'Joa15155111o', nota: 74.9 },
    { id: 111, nome: 'Joa3315o', nota: 7.94 },
    { id: 1111, nome: 'Joa11o53', nota: 7.229 },
    { id: 11111, nome: 'Joao443', nota: 7.9441 },
    { id: 12, nome: 'Joao31231', nota: 7.924 },
    { id: 122, nome: 'Joa331o', nota: 7.95 },
    { id: 1222, nome: 'Joa13o12', nota: 73.9 },
    { id: 12222, nome: 'Joa552o1', nota: 7.559 },
    { id: 13, nome: 'Joa2o1', nota: 7.9131 },
    { id: 133, nome: 'Joao21', nota: 7.9555 },
    { id: 1333, nome: 'Jo2ao1', nota: 7.9111 },
    { id: 13333, nome: 'Jo2ao1', nota: 7.22 },
    { id: 14, nome: 'J2oao1', nota: 7.9441 },
    { id: 144, nome: 'J1oao1', nota: 7.943 },
    { id: 1444, nome: 'Jo4ao1', nota: 7.9434 },
    { id: 14444, nome: 'Jo44ao1', nota: 7.9434 },
    { id: 15, nome: 'Joao51', nota: 7.9434 },
    { id: 155, nome: 'Jo51ao1', nota: 7.94343 },
    { id: 1555, nome: 'Joa51o1', nota: 7.911 },
    { id: 15555, nome: 'Joa33o1', nota: 7.91122 },
    { id: 1123, nome: 'Joao131', nota: 7.944214 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#44f3',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>
export default props =>{
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_,index) => index.toString()} /> 
        </ScrollView>
    )
}