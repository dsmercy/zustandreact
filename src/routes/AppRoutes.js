import React from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import HomePageBody from "../Layouts/Home/index"
import RegistrationForm from "../Pages/Registration/RegistrationForm";
import ForgotPassword from "../Pages/Login/ForgetPassword";
import ResetPassword from "../Pages/Login/ResetPassword";
import Wizard from "../Pages/UserProfle/Wizard";
import UserDashboard from "../Pages/UserProfle/UserDashboard";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePageBody />} />
        <Route exact path="/home" element={<HomePageBody />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<RegistrationForm/>} />
        <Route exact path="/forgetpassword" element={<ForgotPassword/>} />
        <Route exact path="/forget-password" element={<ResetPassword/>} />
        <Route exact path="/job-seeker-profile" element={<Wizard/>} />
        <Route exact path="/userdashboard" element={<UserDashboard/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
