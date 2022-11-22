import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import GroupCard from '../components/GroupCard'

const grupos = [
	{
		"id": "A",
		"partidas": [
			{
				"time1": "Catar",
				"time2": "Equador",
				"bandeira1": "https://countryflagsapi.com/png/qatar",
				"bandeira2": "https://countryflagsapi.com/png/gq",
				"golsTime1": 0,
				"golsTime2": 2,
				"horario": "20/11/2022 - 13:00"
			},
			{
				"time1": "Senegal",
				"time2": "Holanda",
				"bandeira1": "https://countryflagsapi.com/png/sn",
				"bandeira2": "https://countryflagsapi.com/png/nl",
				"golsTime1": 0,
				"golsTime2": 2,
				"horario": "21/11/2022 - 16:00"
			}
		]
	},
	{
		"id": "B",
		"partidas": [
			{
				"time1": "EUA",
				"time2": "Gales",
				"bandeira1": "https://countryflagsapi.com/png/wales",
				"bandeira2": "https://countryflagsapi.com/png/us",
				"golsTime1": 1,
				"golsTime2": 1,
				"horario": "21/11/2022 - 16:00"
			}
		]
	}
]

const GroupScreen = (props) => {
	const navigation = props.navigation

	return (
		<View style={styles.mainView}>
			<FlatList
				data={grupos}
				renderItem={(element) => {
					return <GroupCard group={element.item}
						onTime1Press={(time) => {
							console.log(time)
							navigation.navigate('TeamDetail')
						}}
						onTime2Press={(time) => {
							console.log(time)
							navigation.navigate('TeamDetail')
						}}
					/>
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	mainView: {
		paddingHorizontal: 30,
		backgroundColor: '#fafafa'
	}
})

export default GroupScreen