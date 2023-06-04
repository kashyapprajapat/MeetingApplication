import './App.css';
import  pic from "./Assets/MeetingPic.jpg"
import Form from "./components/Form"
function App() {
  return (
    <>
    <section>
      <header className="header">
        <h1>
          Meeting Application
        </h1>
        </header>
        <main className="main">
          <div>
            <img src={pic} alt="Meeting Related" className="pic"></img>
          </div>
          <div className='form'>
            <Form/>
          </div>
        </main>
        <footer className='footer'>
          <h3>&copy; 2023-2024  Reserved By Meeting Company </h3>
        </footer>
    </section>
    </>
  );
}

export default App;
