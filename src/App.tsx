import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:h-px">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1659424864086-468b4eaa57bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            alt=""
          />
        </div>
        <div className="bg-gray-800 flex flex-col justify-center">
          <form className="bg-gray-900 max-w-[400px] mx-auto rounded-lg p-8">
            <h2 className="text-3xl text-white font-bold text-center">Login</h2>
            <div className="text-gray-400 py-2 flex flex-col">
              <label>E-mail</label>
              <input type="email" className="bg-gray-700 p-2" />
            </div>
            <div className="text-gray-400 py-2 flex flex-col">
              <label>Senha</label>
              <input type="password" className="bg-gray-700 p-2" />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p>
                <input type="checkbox" className="mr-2" />
                Lembrar senha
              </p>
              <p>Esqueci a senha</p>
            </div>
            <button className="bg-teal-500 w-full py-2 rounded-lg text-white font-semibold shadow-lg shadow-teal-900 hover:bg-gray-500">
              Fazer Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
