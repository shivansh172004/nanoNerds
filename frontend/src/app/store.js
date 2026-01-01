// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice.js";
import teamReducer from "../features/team/teamSlice.js";
import postsReducer from "../features/posts/postsSlice.js";
import membersReducer from "../features/members/members.js";
import quizReducer from "../features/quiz/quiz.js";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    team: teamReducer,
    posts: postsReducer,
    members: membersReducer,
    quiz: quizReducer,
  },
});

// // app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from '../features/themes';
// import authReducer from '../features/auth';
// import teamReducer from '../features/team';
// import postsReducer from '../features/posts';
// import membersReducer from '../features/members';
// import quizReducer from '../features/quiz';

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     auth: authReducer,
//     team: teamReducer,
//     posts: postsReducer,
//     members: membersReducer,
//     quiz: quizReducer,
//   },
// });

