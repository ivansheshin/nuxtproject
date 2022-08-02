export default {
  getInfoFromStorage(context) {
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');

    const infoFromStorage = {
      name,
      password,
    };

    context.commit('updateInfoFromInputs', infoFromStorage);
    context.commit('updateAuthIUnfo');
  }
}