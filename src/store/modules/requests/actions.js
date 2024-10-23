export default {

  async contactCoach(context, payload) {
    const reqData = {

      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(`https://video-154-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(reqData)
    })
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Fail to send request');
      throw error
    }

    reqData.id = responseData.name;
    reqData.coachId = payload.coachId;
    context.commit('addRequest', reqData);
  },
  async fetchRequest(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(`https://video-154-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Fail to fetch request');
      throw error
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,

      }
      requests.push(request);
    }
    console.log('>>> tesst requetsss', requests)

    context.commit('setRequest', requests);

  }


};