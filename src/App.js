import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function App() {
  const handleClick = () => {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
  };

  return (
    <div>

      <Navbar bg="primary" variant="dark" style={{ color: '#fff' }}>
        <Navbar.Brand>Maximilian Scheffler Website</Navbar.Brand>
      </Navbar>
      <div class="container border">
        <div class="row">
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
            <div>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Go to Google
              </button>
            </div>
          </div>
          <div class="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
