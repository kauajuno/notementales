import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input placeholder="E-mail" type="text" className="input-box" />
            <button className="btn-primary">Login</button>
            <p>Not registered yet?</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
