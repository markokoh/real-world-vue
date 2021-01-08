import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/markokoh/myfakeserver',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export default {
      // call to get all the events
      getEvents(){
          return apiClient.get('/events')
      },
      // call to get a single event
      getEvent(id){
        return apiClient.get('/events/' + id)
    }
  }