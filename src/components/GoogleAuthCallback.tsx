import React, { useState, useEffect } from "react";
import { useLocation, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { setItem } from "../helpers/localStorage";
import { check } from "../assets/icons";

function GoogleAuthCallback() {


  const [auth, setAuth] = useState();
  const location = useLocation();
  const history = useHistory();

  const redirect = ()=>{
    history.push('/blogs');
  }
  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    axios({
      method: "GET",
      url: `http://localhost:1337/auth/google/callback?${search}`,
    })
      .then((res) => res.data)
      .then((data) => setItem("user", data)).then(()=>redirect());
  }, [location]);

  console.log(auth);

  return (
    <div>
      {auth && (
        <div className="text-center px-5 mx-5">
          <img src={check} width="300" alt="checkImage" />
          <h3 className="text-success mt-4">Google Auth Successfull</h3>
        </div>
      )}
    </div>
  );
}

export default withRouter(GoogleAuthCallback);
