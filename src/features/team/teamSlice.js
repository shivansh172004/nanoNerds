// features/team.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    {
      id: 1,
      name: "Arjun Sharma",
      position: "President",
      year: "4th Year ECE",
      image: "/api/placeholder/300/300",
      email: "arjun@nanonerds.com",
      linkedin: "https://linkedin.com/in/arjunsharma",
      specialization: "VLSI Design, Digital Signal Processing"
    },
    {
      id: 2,
      name: "Priya Singh",
      position: "Vice President",
      year: "3rd Year ECE",
      image: "/api/placeholder/300/300",
      email: "priya@nanonerds.com",
      linkedin: "https://linkedin.com/in/priyasingh",
      specialization: "Embedded Systems, IoT"
    },
    {
      id: 3,
      name: "Rahul Gupta",
      position: "Technical Head",
      year: "4th Year ECE",
      image: "/api/placeholder/300/300",
      email: "rahul@nanonerds.com",
      linkedin: "https://linkedin.com/in/rahulgupta",
      specialization: "Microprocessors, PCB Design"
    },
    {
      id: 4,
      name: "Sneha Patel",
      position: "Events Coordinator",
      year: "2nd Year ECE",
      image: "/api/placeholder/300/300",
      email: "sneha@nanonerds.com",
      linkedin: "https://linkedin.com/in/snehapatel",
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