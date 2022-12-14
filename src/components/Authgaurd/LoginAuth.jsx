import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function LoginAuth(props) {
  const { isAuthenticated } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/payment");
    } else {
      return navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return (
      <Outlet />
    );
  }
}
