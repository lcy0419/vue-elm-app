const state = {
    nowCity: {}
};
const getters = {
    nowCity: state => state.nowCity
};
const mutations = {
    setNowCity: (state, nowCity) => state.nowCity = nowCity
};
const actions = {
    setNowCityAsync: ({ commit }, nowCity) => commit("setNowCity", nowCity)
};

export default {
    state, getters, mutations, actions
}