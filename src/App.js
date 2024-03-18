import { useRoutes } from 'react-router-dom';
import { ROUTES } from './route/route';

function App() {
  return (
    useRoutes(ROUTES)
  );
}

export default App;
