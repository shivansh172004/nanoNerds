// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const colors = require('colors');

// // Load models
// const User = require('./models/User');
// const Member = require('./models/Member');
// const Post = require('./models/Post');
// const Team = require('./models/Team');
// const Quiz = require('./models/Quiz');

// dotenv.config();

// // Sample data (Keep your arrays as they were)
// const users = [ /* ... your users data ... */ ];
// const team = [ /* ... your team data ... */ ];
// const quizzes = [ /* ... your quizzes data ... */ ];

// // Database Connection Function
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://shivanshsharma98309:Shivanshsh0@shivanshs.qwdsswh.mongodb.net/nanonerds');
//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red);
//     process.exit(1);
//   }
// };

// const importData = async () => {
//   try {
//     await User.deleteMany();
//     await Member.deleteMany();
//     await Post.deleteMany();
//     await Team.deleteMany();
//     await Quiz.deleteMany();

//     const createdUsers = await User.create(users);
//     console.log('Users imported'.green.inverse);

//     await Team.create(team);
//     console.log('Team imported'.green.inverse);

//     const quizzesWithCreator = quizzes.map(quiz => ({
//       ...quiz,
//       createdBy: createdUsers[0]._id
//     }));
//     await Quiz.create(quizzesWithCreator);
//     console.log('Quizzes imported'.green.inverse);

//     console.log('Data imported successfully!'.green.inverse);
//     process.exit();
//   } catch (error) {
//     console.error(`Error: ${error}`.red.inverse);
//     process.exit(1);
//   }
// };

// const deleteData = async () => {
//   try {
//     await User.deleteMany();
//     await Member.deleteMany();
//     await Post.deleteMany();
//     await Team.deleteMany();
//     await Quiz.deleteMany();

//     console.log('Data destroyed successfully!'.red.inverse);
//     process.exit();
//   } catch (error) {
//     console.error(`Error: ${error}`.red.inverse);
//     process.exit(1);
//   }
// };

// // Main execution function
// const run = async () => {
//   await connectDB(); // Wait for DB to connect FIRST

//   if (process.argv[2] === '-i') {
//     await importData();
//   } else if (process.argv[2] === '-d') {
//     await deleteData();
//   } else {
//     console.log('Please provide -i to import or -d to delete data');
//     process.exit();
//   }
// };

// run();

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// NOTE: In ES Modules, you MUST include the .js extension in the path
import User from "./models/User.js";
import Member from "./models/Member.js";
import Post from "./models/Post.js";
import Team from "./models/Team.js";
import Quiz from "./models/Quiz.js";

dotenv.config();

const users = [
  {
    name: "Admin User",
    email: "admin@nanonerds.com",
    password: "admin123",
    role: "admin",
  },
  {
    name: "Moderator User",
    email: "moderator@nanonerds.com",
    password: "mod123",
    role: "moderator",
  },
  {
    name: "Regular User",
    email: "user@nanonerds.com",
    password: "user123",
    role: "user",
  },
];

const team = [
  {
    name: "Souradip",
    position: "Coordinator",
    year: "4th Year ECE",
    email: "souradip32@gmail.com",
    order: 1,
  },
];

const quizzes = [
  {
    title: "Basic Electronics Quiz",
    questions: [
      {
        question: "What is Ohm's Law?",
        options: ["V = I × R", "P = V × I"],
        correctAnswer: 0,
      },
    ],
  },
];

const importData = async () => {
  try {
    await User.deleteMany();
    await Member.deleteMany();
    await Post.deleteMany();
    await Team.deleteMany();
    await Quiz.deleteMany();

    const createdUsers = await User.create(users);
    await Team.create(team);

    const quizzesWithCreator = quizzes.map((quiz) => ({
      ...quiz,
      createdBy: createdUsers[0]._id,
    }));
    await Quiz.create(quizzesWithCreator);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Member.deleteMany();
    await Post.deleteMany();
    await Team.deleteMany();
    await Quiz.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

// Main Run Function
const run = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://shivanshsharma98309:Shivanshsh0@shivanshs.qwdsswh.mongodb.net/nanonerds"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

    if (process.argv[2] === "-i") {
      await importData();
    } else if (process.argv[2] === "-d") {
      await deleteData();
    } else {
      console.log("Please provide -i to import or -d to delete data".yellow);
      process.exit();
    }
  } catch (error) {
    console.error(`Connection Error: ${error.message}`.red);
    process.exit(1);
  }
};

run();
