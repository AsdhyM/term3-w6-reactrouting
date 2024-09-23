
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/_templates/HomePage';
import AboutPage from './pages/_templates/AboutPage';
import ContactPage from './pages/_templates/ContactPage';

// Convert an array of objects into a <Router> component containing <Route> components
const someFancyRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={someFancyRouter} />
    </div>
  );
}

export default App;