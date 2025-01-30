import Container from "./Container";

function App() {
  return (
    <>
      <header className="sr-only">
        <h1>Time Tracking App</h1>
      </header>
      <main>
        <Container />
      </main>
      <footer className="absolute animate-pulse bottom-0 left-1/2 w-full -translate-x-1/2  text-center text-white">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Adnan0-IM">
          Adnan Iliyasu Muhammad
        </a>
        .
      </footer>
    </>
  );
}

export default App;
