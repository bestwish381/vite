import "./App.scss";
import { createContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UpLoad from "./UpLoad";
import BuyCredits from "./BuyCredits";
import "vite/modulepreload-polyfill";
import About from "./About";
import CalculateCost from "./CalculateCost";
import DashBoard from "./DashBoard";
export const SignedInContext = createContext(false);
export const SignedUpContext = createContext(true);

// * VK: Significant for the backend area. Please exercise caution when making alterations
import { sendLogInRequest } from "./components/scripts/logIn";

function App() {
  const [signedIn, onSignIn] = useState(false);
  const [signedUp, onSignUp] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleSignUp() {
    onSignUp(!signedUp);
  }

  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  async function handleSignIn(userData: {
    username: string;
    password: string;
  }) {
    // * VK: userData содержит имя пользователя и пароль из формы
    const answer = await sendLogInRequest(userData);
    console.log(answer, "answer");

    if (answer.status === "success") {
      // * VK: Логика в случае успешной авторизации
      // console.log('Server response OK:', data);
      alert(answer.message);

      // * VK: Прежний код, который выполнялся после LogIn и вызова функции handleSignIn
      onSignIn(!signedIn);
      // * VK: Передача данных для закрытия модального окна
      setIsOpen(!modalIsOpen);
    } else {
      // * VK: Логика в случае неуспешной авторизации
      // console.log('Server response NOT OK:', data);
      if (answer.HTTP_status === 400) {
        // TODO VK: дополнить логику на случай неуспешной авторизации
        alert(answer.message);
      } else if (answer.HTTP_status === 400) {
        // TODO VK: дополнить логику на случай сбоя в работе сервера
        alert(answer.message);
      } else {
        // TODO VK: пересмотреть этот способ обработки ошибок, он не работает
        alert("Unknown error!");
      }
    }
  }
  // * ↑ VK: Significant for the backend area. Please exercise caution when making alterations

  return (
    <>
      <SignedUpContext.Provider value={signedUp}>
        <SignedInContext.Provider value={signedIn}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  kind="full"
                  onSignIn={onSignIn}
                  handleSignIn={handleSignIn}
                  signedUp={signedUp}
                  handleSignUp={handleSignUp}
                  modalIsOpen={modalIsOpen}
                  setIsOpen={setIsOpen}
                />
              }
            />
            <Route
              path="About"
              element={
                <About
                  kind="short"
                  onSignIn={onSignIn}
                  handleSignIn={handleSignIn}
                  signedUp={signedUp}
                  handleSignUp={handleSignUp}
                  modalIsOpen={modalIsOpen}
                  setIsOpen={setIsOpen}
                />
              }
            />
            <Route
              path="UpLoad"
              element={
                <UpLoad
                  onSignIn={onSignIn}
                  handleSignIn={handleSignIn}
                  signedUp={signedUp}
                  handleSignUp={handleSignUp}
                  modalIsOpen={modalIsOpen}
                  setIsOpen={setIsOpen}
                />
              }
            />
            <Route
              path="CalculateCost"
              element={
                <CalculateCost
                  kind="short"
                  onSignIn={onSignIn}
                  handleSignIn={handleSignIn}
                  signedUp={signedUp}
                  handleSignUp={handleSignUp}
                  modalIsOpen={modalIsOpen}
                  setIsOpen={setIsOpen}
                />
              }
            />
            <Route
              path="BuyCredits"
              element={
                <BuyCredits
                  kind="short"
                  onSignIn={onSignIn}
                  handleSignIn={handleSignIn}
                  signedUp={signedUp}
                  handleSignUp={handleSignUp}
                  modalIsOpen={modalIsOpen}
                  setIsOpen={setIsOpen}
                />
              }
            />
            <Route
              path="DashBoard"
              element={
                <DashBoard
                  kind="short"
                  onSignIn={onSignIn}
                  handleSignIn={handleSignIn}
                  signedUp={signedUp}
                  handleSignUp={handleSignUp}
                  modalIsOpen={modalIsOpen}
                  setIsOpen={setIsOpen}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SignedInContext.Provider>
      </SignedUpContext.Provider>
    </>
  );
}

export default App;

function NotFound() {
  return (
    <>
      <h2>Not found page!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}
function useReduxState(arg0: string, arg1: string): [any, any] {
  throw new Error("Function not implemented.");
}
