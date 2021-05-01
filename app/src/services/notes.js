import axios from 'axios'

const baseUrl = '/api/notes'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAllNotes = () => {
  /* return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      return json;
    }); */
  return axios
    .get(baseUrl)
    .then(({ data }) => {
      return data
    })
}

const createNote = (newNote) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  return axios
    .post(baseUrl, newNote, config)
    .then((response) => {
      const { data } = response
      return data
    })
}

export default { getAllNotes, createNote, setToken }
