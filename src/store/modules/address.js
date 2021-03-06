const state = {
    address: []
};
const getters = {
    getAddresses: state => state.address
};
const mutations = {
    setAddress: (state, address) => state.address.push(address)
};
const actions = {
    setAddressAsync: ({
        commit
    }, address) => commit("setAddress", address)
};

export default {
    state,
    getters,
    mutations,
    actions
}
