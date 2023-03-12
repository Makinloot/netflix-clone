import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

import { useAuth } from "../context/AuthContext";

const Browse = () => {

  const navigate = useNavigate()
  const { currentUser } = useAuth();

  useEffect(() => {
    if(!currentUser) navigate('/')
  }, [currentUser])

  return (
    <>
      <Header landing={false} />
      <Main />
      <Footer />
    </>
  );
};

export default Browse;
