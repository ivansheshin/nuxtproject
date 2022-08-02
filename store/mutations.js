export default {
  updateInfoFromInputs(state, infoFromStorage) {
    state.infoFromInputs.name = infoFromStorage.name;
    state.infoFromInputs.password = infoFromStorage.password;
  },

  updateAuthIUnfo(state) {
    const isName = state.accInfo.name === state.infoFromInputs.name;
    const isPass = state.accInfo.password === state.infoFromInputs.password;

    if (isName && isPass) {
      state.auth = true;
    }
  }
}