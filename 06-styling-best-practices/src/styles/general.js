import metrics from './metrics'
import colors from './colors'
import fonts from './fonts'

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.header,
    fontWeight: 'bold',
    fontSize: fonts.input,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
  paragraph: {
    fontSize: fonts.regular,
    color: colors.text
  }
}

export default general