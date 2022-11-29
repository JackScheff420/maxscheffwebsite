import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Hier steht ein neuer text
        </p>
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="..." class="rounded me-2" alt="..."/>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
