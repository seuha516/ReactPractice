import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "김민준",
    description: "개발자",
  },
  gildong: {
    name: "홍길동",
    description: "주인공",
  },
};

const Profile = ({ match }) => {
  console.log(match.params);
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>없는 사용자</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
