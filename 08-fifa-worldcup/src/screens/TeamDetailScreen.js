import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const team = {
	name: "Brasil 🇧🇷",
	members: [
		{
			name: "Adulto Ney",
			number: 10,
			position: "Atacante"
		},
		{
			name: "Denecley",
			number: 999,
			position: "Técnico"
		}
	],
	matches: [
		{
			detail: "🇧🇷 Brasil x Alemanha 🇩🇪",
			time: "24/11/2022 - 16:00"
		}
	]
}

const TeamDetailScreen = (props) => {
	const navigation = props.navigation
	return (
		<View>
			<Text>{team.name}</Text>
			<Text>Escalação</Text>
			<FlatList
				data={team.members}
				renderItem={(element) => {
					const member = element.item
					return (
						<View>
							<Text>{member.name}</Text>
							<Text>Camisa {member.number}</Text>
							<Text>{member.position}</Text>
						</View>
					)
				}}
			/>

			<Text>Jogos</Text>
			<FlatList
				data={team.matches}
				renderItem={(element) => {
					const match = element.item
					return (
						<View>
							<Text>{match.detail}</Text>
							<Text>{match.time}</Text>
						</View>
					)
				}}
			/>

		</View>
	)
}

const styles = StyleSheet.create({})

export default TeamDetailScreen