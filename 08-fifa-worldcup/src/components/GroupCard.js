import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

const GroupCard = (props) => {
    const group = props.group
    return (
        <View style={styles.card}>
            <Text style={styles.textTitle}>Grupo {group.id}</Text>
            <FlatList
                data={group.partidas}
                renderItem={(partidaElement) => {
                    const partida = partidaElement.item
                    return (
                        <View style={styles.viewMatch}>
                            <View style={styles.viewHorizontal}>
                                <TouchableOpacity
                                    onPress={() => {
                                        props.onTime1Press(partida.time1)
                                    }}>
                                    <Text style={styles.textMatch}>
                                        {partida.bandeira1} {partida.time1} {partida.golsTime1}
                                    </Text>
                                </TouchableOpacity>
                                <Text style={[styles.marginHorizontal, styles.textMatch]}>x</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        props.onTime2Press(partida.time2)
                                    }}>
                                    <Text style={styles.textMatch}>
                                        {partida.golsTime2} {partida.time2} {partida.bandeira2}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.textTime}>{partida.horario}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    viewHorizontal: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewMatch: {
        marginTop: 5
    },
    marginHorizontal: {
        marginHorizontal: 8
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textMatch: {
        color: '#333333',
        fontSize: 19
    },
    textTime: {
        color: '#777777',
        fontSize: 10,
        fontWeight: 'bold'
    }
})

export default GroupCard