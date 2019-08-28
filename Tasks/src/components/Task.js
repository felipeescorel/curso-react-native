import React from 'react'
import {StuleSheet,Text,View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'

export default props => {
    let check = null
    if (props.doneAt !== null){
        check = (
            <View style={styles.done}>
                <Icon
                    name='check' 
                    size={20}
                    color={commonStyles.colors.secondary}
                />
            </View>
        )
    } else {
        check = <View style={styles.padding}/>
    }

    const descStyle = props.doneAt !== null ?
    {textDecorationLine:'line-trough'}:{}

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>{check}</View>
            <View>
                <Text style={[styles.description,descStyle]}>
                    {props.desc}
                </Text>
                <Text style={styles.date}>
                    {moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM')}
                </Text>
            </View>
        </View>
    )
}
