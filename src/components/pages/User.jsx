import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../../Context/Github/GithubContext";

const User = () => {
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();
  console.log("loginn", params);

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
};

export default User;
