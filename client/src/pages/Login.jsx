import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../data/Assets/login.png";
import hero from "../data/Assets/hero.png";

import { useStateContext } from "../contexts/ContextProvider";

const Login = () => {
  const { setCookies } = useStateContext();

  const navigate = useNavigate();

  const [loginField, setLoginField] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginapi = "http://localhost:3005";

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${loginapi}/auth/login`, {
        loginField,
        password,
      });

      if (response.status === 200) {
        setMessage(response.data.message);
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        window.localStorage.setItem("type", response.data.type);

        response.data.type === "Employee" ||
        response.data.type === "Tea Plucker"
          ? navigate("/UserProfilePage")
          : navigate("/");
      } else {
        setMessage("Success");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Wrong Password or Username");
    }
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const isLoggedIn = localStorage.getItem("userID") ? true : false;
  return (
    <>
      {isLoggedIn && navigate("/")}
      <section class="h-screen w-full bg-gradient-to-r from-green-500 from-10% via-green-700 via-30% to-emerald-500 to-90% ...">
        <div className="z-10 pt-[180px]">
          <h1 className=" text-center text-4xl pt-5 text-white font-bold uppercase  ">
            Welcome to Green Lanka Tea Factory
          </h1>

          <div class=" flex justify-center content-center items-center m-auto ">
            <div
              className="
                     flex justify-center content-center items-center w-[1000px]  h-[500px] mt-5 "
            >
              <div class="g-6 flex flex-wrap content-center items-center justify-center lg:justify-between bg-gray-200 rounded-2xl shadow-md">
                <div class="  shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 justify-center items-center">
                  <img
                    src={login}
                    class=" h-[500px] w-[700px] opacity-70 "
                    alt="Sample image"
                  />
                </div>

                <div class="mt-3 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 items-center px-8">
                  <form className="pr-5">
                    <img
                      src={hero}
                      class=" w-[50px] h-[50px] items-center "
                      alt="Sample image"
                    />

                    <div class="flex flex-row items-center justify-center lg:justify-start">
                      <h3
                        class="mb-0 mr-4 text-xl
                                         font-weight-700 uppercase  pt-5 text-green-500"
                      >
                        Login
                        <br />
                      </h3>
                    </div>
                    <span className="text-red-500 font-semibold">
                      {message}
                    </span>

                    <div
                      class="bg-white shadow-md rounded relative mb-6 mt-6"
                      data-te-input-wrapper-init
                    >
                      <input
                        type="text"
                        class="appearance-none peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Mobile or Username"
                        value={loginField}
                        onChange={(event) => setLoginField(event.target.value)}
                        required
                      />

                      <label
                        for="Username or password"
                        class="block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        User Name
                        {/* block tracking-wide pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary */}
                      </label>
                    </div>

                    <div
                      class="bg-white shadow-md rounded relative mb-6"
                      data-te-input-wrapper-init
                    >
                      <input
                        type={show ? "text" : "password"}
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                      <label
                        for="exampleFormControlInput22"
                        class="block  pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Password
                      </label>
                    </div>
                    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-0">
                      <input
                        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-green-400 checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-green-400 checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="exampleCheck2"
                        onClick={handleShow}
                      />
                      <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="exampleCheck2"
                      >
                        show password
                      </label>
                    </div>

                    <div class="mb-6 flex items-centr justify-between mt-5">
                      <div class="text-center ">
                        <button
                          type="submit"
                          onClick={handleLogin}
                          class="inline-block rounded bg-green-500 px-6 py-3 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:text-left"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Login
                        </button>

                        <a
                          class=" ml-20 inline-block  font-bold text-sm text-green-500 hover:text-green-800"
                          href="#"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
