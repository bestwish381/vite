import { Footer } from "./components/footer/footer";
import StartScreen from "./components/startScreen/startScreen";

export default function Home({
  kind,
  handleSignIn,
  onSignIn,
  handleSignUp,
  modalIsOpen,
  setIsOpen,
}: any) {
  return (
    <>
      <div className="app">
        <StartScreen
          kind={kind}
          handleSignIn={handleSignIn}
          onSignIn={onSignIn}
          handleSignUp={handleSignUp}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <Footer kind="full" />
    </>
  );
}
