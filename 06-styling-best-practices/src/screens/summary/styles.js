
import { StyleSheet } from "react-native"
import { general, metrics } from "../../styles"

const styles = StyleSheet.create({
  mainContainer: {
    ...general.container,
    ...general.section,
    rowGap: metrics.gap
  }
})

export default styles