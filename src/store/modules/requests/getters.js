export default {
  requests(state) {
    // const coachId = rootGetters.userId;
    return state.requests;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  }

};