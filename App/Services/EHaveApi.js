export default {
  // Functions return fixtures
  getPaitent: () => {
    return {
      ok: true,
      data: require('../Fixtures/paitent.json')
    }
  },
  getPaitentResult: () => {
    return {
      ok: true,
      data: require('../Fixtures/paitentResult.json')
    }
  },
}
