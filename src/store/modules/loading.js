const state = {
    loading: false
};
const getters = {
    getLoading: state => state.loading
};
const mutations = {
    setLoading: (state, loading) => state.loading = loading
};
const actions = {
    setLoadingAsync: ({
        commit
    }, loading) => commit("setLoading", loading)
};

export default {
    state,
    getters,
    mutations,
    actions
}
