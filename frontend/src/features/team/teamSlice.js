// features/team.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    {
      id: 1,
      name: "Souradip",
      position: "Coordinator",
      year: "4th Year ECE",
      image: "/api/placeholder/300/300",
      email: "souradip32@gmail.com",
      linkedin: "https://www.linkedin.com/in/souradip-das-077a72256 ",
      specialization: "VLSI Design, Digital Signal Processing"
    },
    {
id: 2,
      name: "Sumit Raj",
      position: "Co Coordinator",
      year: "4th Year ECE",
      image: "/api/placeholder/300/300",
      email: "sumit583@gmail.com",
      linkedin: "https://linkedin.com/in/sumit-raj-876468252",
      specialization: "VLSI Design"
    },
    {
      id: 3,
      name: "Brinderpreet Singh",
      position: "Member",
      year: "3rd Year EE",
      image: "/api/placeholder/300/300",
      email: "brinderpreet232@gmail.com",
      linkedin: "https://linkedin.com/in/brinder-preet-singh-33a218280",
      specialization: "VLSI Design"
    },
    {
      id: 4,
      name: "Shivansh Sharma",
      position: "Technical Head",
      year: "3rd Year ECE",
      image: "/api/placeholder/300/300",
      email: "rshivanshsharma98309@gmail.com",
      linkedin: "https://linkedin.com/shivansh-sharma-298987289",
      specialization: "Full Stack Web Development"
    },
    {
      id: 5,
      name: "Souvik Mandal",
      position: "Member",
      year: "3rd Year ECE",
      image: "/api/placeholder/300/300",
      email: "souvik422@gmail.com",
      linkedin: "https://linkedin.com/in/souvik-mandal-a29902285",
      specialization: "Analog Electronics, Communication Systems"
    }
  ],
  loading: false,
  error: null
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMembers: (state, action) => {
      state.members = action.payload;
      state.loading = false;
      state.error = null;
    },
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    updateMember: (state, action) => {
      const index = state.members.findIndex(member => member.id === action.payload.id);
      if (index !== -1) {
        state.members[index] = action.payload;
      }
    },
    removeMember: (state, action) => {
      state.members = state.members.filter(member => member.id !== action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { setLoading, setMembers, addMember, updateMember, removeMember, setError } = teamSlice.actions;
export default teamSlice.reducer;