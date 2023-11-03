import { Layout } from "@components/layout";
import { useSelector } from "react-redux";
import { selectorUser } from "../../services/slices/authSlice";
import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "@paths";

export const HomePage = () => {
  const user = useSelector(selectorUser);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate(paths.login);
    }
  }, [user, navigate]);

  return (
    <Layout>
      <h1>HomePage</h1>
    </Layout>
  );
};
