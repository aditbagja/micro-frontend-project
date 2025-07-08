import CustomButton from "serviceApp/CustomButton";
import { useAuthContext } from "serviceApp/useAuthContext";
import "./App.css";

function App() {
  const { isAuthenticated, login, logout } = useAuthContext();
  return (
    <>
      <h1>Vite + React</h1>
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
}

export default App;
