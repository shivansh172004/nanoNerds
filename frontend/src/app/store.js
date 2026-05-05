import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice.js";
import teamReducer from "../features/team/teamSlice.js";
import postsReducer from "../features/posts/postsSlice.js";
import membersReducer from "../features/members/members.js";
import quizReducer from "../features/quiz/quiz.js";
import authReducer from "../features/auth/authSlice.js";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    team: teamReducer,
    posts: postsReducer,
    members: membersReducer,
    quiz: quizReducer,
    auth: authReducer,
  },
});