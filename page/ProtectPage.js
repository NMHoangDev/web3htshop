import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();

  if (!user) {
    // Nếu không đăng nhập, điều hướng đến trang đăng nhập
    return <Navigate to="/sign-in" />;
  }

  // Nếu đã đăng nhập, hiển thị nội dung của route
  return children;
};

export default ProtectedRoute;
