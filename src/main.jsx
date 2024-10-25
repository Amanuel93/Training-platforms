// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'; // Landing page
import './index.css';
import DashboardLoayout from "./components/Layouts/DashboardLayout";
import Trainings from "./components/Dashboard/Trainings";
import AddTraining from "./components/Dashboard/AddTraining";
import AddChapter from './components/Dashboard/AddChapter'
import AddQuestion from './components/Dashboard/AddQuestion'
import AddtrainingLayout from "./components/Layouts/AddtraininingLayout"
import Dashboard from "./components/Dashboard/Dashboard";
import Trainee from "./components/Dashboard/Trainee";
import Setting from "./components/Dashboard/Setting";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from './redux/store'
import { Provider } from 'react-redux';
import TraineeDetail from "./components/Dashboard/TraineeDetail";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import TraineeLayout from "./components/Layouts/TraineeLayout";
import ForgotPassword from "./components/Auth/ForgotPassword";
import PersonalTrainingLayout from "./components/Layouts/PersonalTrainingLayout";
import TrainingsList from "./components/TraineePage/TrainingsList";
import TrainingsPasscode from "./components/TraineePage/TrainingsPasscode";
import TrainingsDetail from "./components/TraineePage/TrainingsDetail";
import ReadingandQuestions from "./components/TraineePage/ReadingandQuestions";
const router = createBrowserRouter([
  {
    path: "/", 
    element:<App/>
  },
  {
    path: "Signup", 
    element:<Signup/>
  },
  {
    path: "Login", 
    element:<Login/>
  },
  {
    path: "Forgot-Password", 
    element:<ForgotPassword/>
  },
  {
    path:"Dashboard",
    element:<DashboardLoayout/>,
    children:[
      {
        path:"",
        element:<Dashboard/>
      },
      {
        path:"trainings",
        element:<Trainings/>
      },
      {
        path:"add",
        element:<AddtrainingLayout/>,
        children:[
          {
            path:"",
            element:<AddTraining/>
          },
          {
            path:"chapter",
            element:<AddChapter/>
          },
          {
            path:"question",
            element:<AddQuestion/>
          },
        ]
      },
      {
        path:"trainee",
        element:<TraineeLayout/>,
        children:[
          {
            path:"",
            element:<Trainee/>
          },
          {
            path:":traineeId",
            element:<TraineeDetail/>
          }
        ]
      },
      {
        path:"setting",
        element:<Setting/>
      },
    ]
  },
  {
    path: "Trainee", 
    element:<PersonalTrainingLayout/>,
    children:[
      {
        path:"",
        element:<TrainingsList/>
      },
      {
        path:":trainingId",
        element:<TrainingsPasscode/>
      },
      {
        path:":trainingId",
        element:<TrainingsDetail/>
      },
      {
        path:":chapterId",
        element:<ReadingandQuestions/>
      },
    ]
  },
]);

// Render the RouterProvider with the router inside the ThemeProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store = {store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

