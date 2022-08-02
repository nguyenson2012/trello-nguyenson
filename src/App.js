import './App.scss';

function App() {
  return (
    <div className="trello-nguyenson-master">
      <nav className="navbar app">App Bar</nav>
      <nav className="navbar board">Board</nav>
      <div className="board-columns">
        <div className="column">
          <headers>Brainstorm</headers>
          <ul>
            <li>
            <img src="https://i0.wp.com/duongnhuquynh.com/wp-content/uploads/2022/07/pexels-photo-5778899.jpeg" alt="anh-minh-hoa"></img>
            </li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <headers>Brainstorm</headers>
          <ul>
            <li>
            <img src="https://i0.wp.com/duongnhuquynh.com/wp-content/uploads/2022/07/pexels-photo-5778899.jpeg" alt="anh-minh-hoa"></img>
            </li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
            <li>Add what you want below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
