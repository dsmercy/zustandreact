import React from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import HomePageBody from "../Layouts/Home/index"
import RegistrationForm from "../Pages/Registration/RegistrationForm";
import ForgotPassword from "../Pages/Login/ForgetPassword";
import ResetPassword from "../Pages/Login/ResetPassword";
import JobSeekerForm from "../Pages/UserProfle/JobSeekerForm";
import UserDashboard from "../Pages/UserProfle/UserDashboard";
import  ChangePassword  from "../Pages/Login/ChangePassword";
import PrivateRoute from "./PrivateRoutes";
import { VerifyEmail } from "../Pages/Registration/VerifyEmail";
import ViewProfileDetail from "../Pages/UserProfle/ViewProfileDetails";
// import BasicDetails from "../Pages/UserProfle/BasicDetails";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePageBody />} />
        <Route exact path="/home" element={<HomePageBody />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/forgetpassword" element={<ForgotPassword />} />
        <Route exact path="/forget-password" element={<ResetPassword />} />
        <Route exact path="/ConfirmEmail" element={<VerifyEmail />} />
        <Route exact path="/profile-details" element={<ViewProfileDetail />} />
        {/* <Route exact path="/loader" element={<BasicDetails />} /> */}
        <Route path="/job-seeker-profile" element={ <PrivateRoute><JobSeekerForm /></PrivateRoute> } />
        <Route path="/userdashboard" element={ <PrivateRoute><UserDashboard /></PrivateRoute> } />
        <Route exact path="/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
     
      </Routes>
    </>
  );
};

export default AppRoutes;
