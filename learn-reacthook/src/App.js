import logo from './logo.svg';
import './App.css';
import Header from './layout/header';
import Main from './layout/main';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 px-0">
            <Header />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 px-0">
            <Main />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
