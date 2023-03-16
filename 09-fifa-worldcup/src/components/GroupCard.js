import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'

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
                  style={styles.viewHorizontal}
                  onPress={() => {
                    props.onTime1Press(partida.time1)
                  }}>
                  <Image style={styles.imgFlag} source={partida.bandeira1} />
                  <Text style={styles.textMatch}>
                    {partida.time1} {partida.golsTime1}
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.marginHorizontal, styles.textMatch]}>x</Text>
                <TouchableOpacity
                  style={styles.viewHorizontal}
                  onPress={() => {
                    props.onTime2Press(partida.time2)
                  }}>
                  <Text style={styles.textMatch}>
                    {partida.golsTime2} {partida.time2}
                  </Text>
                  <Image style={styles.imgFlag} source={partida.bandeira2} />
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
    borderColor: '#ddd',
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
    fontSize: 19,
    marginHorizontal: 5
  },
  textTime: {
    color: '#777777',
    fontSize: 10,
    fontWeight: 'bold'
  },
  imgFlag: {
    borderColor: '#ddd',
    borderWidth: 1,
    width: 30,
    height: 20
  }
})

export default GroupCard