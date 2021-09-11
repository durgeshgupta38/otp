import { useEffect, useState } from "react";
import { getCurrentUser } from "../../apis/authenticationApis";


const UserProfile = () => {
    let [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        const user = getCurrentUser();
        setCurrentUser(user);
    }, []);
    return (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser?.username}</strong> Profile
            </h3>
          </header>
          {/* <p>
            <strong>Token:</strong>{" "}
            {currentUser?.token.substring(0, 20)} ...{" "}
            {currentUser?.token.substr(currentUser?.token.length - 20)}
          </p> */}
          <p>
            <strong>Email:</strong>{" "}
            {currentUser?.email}
          </p>
        </div>
      );
}

export default UserProfile;