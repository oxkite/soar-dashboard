import './App.css';
import ThemeRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
      <Router>
        <ThemeRoutes />
      </Router>
  );
}

export default App;
