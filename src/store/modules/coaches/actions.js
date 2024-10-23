export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const token = context.rootGetters.token;

    fetch(`https://video-154-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    })

    context.commit('registerCoach', {
      ...coachData, id: userId
    });
  },
  async loadCoaches(context) {
    const res = await fetch(`https://video-154-default-rtdb.firebaseio.com/coaches.json`);
    const response = await res.json();
    if (!res.ok) {
      const error = new Error(response.message || 'Fail to fetch');
      throw error
    }
    const coaches = [];
    for (const key in response) {
      const coach = {
        id: key,
        firstName: response[key].firstName,
        lastName: response[key].lastName,
        description: response[key].description,
        hourlyRate: response[key].hourlyRate,
        areas: response[key].areas,
      }
      coaches.push(coach);
    }
    console.log('>>> tesst coahces', coaches)

    context.commit('setCoaches', coaches);
  }
};