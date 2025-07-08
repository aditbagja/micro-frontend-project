import CustomButton from "serviceApp/CustomButton";
import { useAuthContext } from "serviceApp/useAuthContext";

const Homepage = () => {
  const { isAuthenticated, login, logout } = useAuthContext();
  return (
    <>
      <div className="card">
        <CustomButton />
      </div>
      <div>
        <button className="button" onClick={login}>
          Login
        </button>
        <button className="button" onClick={logout}>
          Logout
        </button>
        <p>
          Login Status:{" "}
          {isAuthenticated ? "Kamu Berhasil Login" : "Kamu Logout"}
        </p>
      </div>
    </>
  );
};

export default Homepage;
