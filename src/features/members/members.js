// features/members.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    {
      id: 1,
      name: "Amit Kumar",
      email: "amit@example.com",
      rollNumber: "19ECE001",
      year: "4th Year",
      branch: "ECE",
      phone: "+91-9876543210",
      joinDate: "2021-08-15",
      status: "active",
      interests: ["VLSI", "Digital Signal Processing", "Machine Learning"],
      projects: ["Smart Traffic System", "IoT Weather Station"],
      achievements: ["Winner - Hackathon 2023", "Best Project Award"]
    },
    {
      id: 2,
      name: "Neha Singh",
      email: "neha@example.com",
      rollNumber: "20ECE015",
      year: "3rd Year",
      branch: "ECE",
      phone: "+91-8765432109",
      joinDate: "2022-01-20",
      status: "active",
      interests: ["Embedded Systems", "IoT", "Robotics"],
      projects: ["Home Automation", "Drone Navigation System"],
      achievements: ["Runner-up - Tech Fest 2023"]
    }
  ],
  registrations: [
    {
      id: 1,
      name: "Rajesh Patel",
      email: "rajesh@example.com",
      rollNumber: "22ECE045",
      year: "2nd Year",
      branch: "ECE",
      phone: "+91-7654321098",
      status: "pending",
      appliedDate: "2024-09-28",
      interests: ["VLSI Design", "Analog Electronics"]
    }
  ],
  currentUser: null,
  loading: false,
  error: null
};

const membersSlice = createSlice({
  name: 'members',
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
    addRegistration: (state, action) => {
      state.registrations.push(action.payload);
    },
    approveRegistration: (state, action) => {
      const registration = state.registrations.find(reg => reg.id === action.payload);
      if (registration) {
        const newMember = {
          ...registration,
          status: 'active',
          joinDate: new Date().toISOString().split('T')[0],
          projects: [],
          achievements: []
        };
        state.members.push(newMember);
        state.registrations = state.registrations.filter(reg => reg.id !== action.payload);
      }
    },
    rejectRegistration: (state, action) => {
      state.registrations = state.registrations.filter(reg => reg.id !== action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { 
  setLoading, 
  setMembers, 
  addMember, 
  updateMember, 
  removeMember, 
  addRegistration, 
  approveRegistration, 
  rejectRegistration, 
  setCurrentUser, 
  setError 
} = membersSlice.actions;

export default membersSlice.reducer;