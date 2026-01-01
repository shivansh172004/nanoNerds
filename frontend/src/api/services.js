import axios from 'axios';

export const contactService = {
  submitContact: async (data) => {
    return axios.post('http://localhost:5000/api/contact', data);
  }
};
