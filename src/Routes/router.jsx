import { createBrowserRouter } from 'react-router-dom';
import App from '../Layout/App';
import ErrorPage from './error-page';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
  ]);

export default router
