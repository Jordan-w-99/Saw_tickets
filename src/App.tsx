import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HeaderRoot } from './routes/Header/headerRoot';
import { HomeRoot } from './routes/homeRoot';

const App = (): React.JSX.Element => {

  const router = createBrowserRouter([
    {
      path: '/music-tickets',
      element:
        <>
          <HeaderRoot />
          <HomeRoot />
        </>
    },
    {
      path: "*", // no match route, basically sets default.
      element: <Navigate to='/music-tickets' replace />
    }
  ]);

  return (
    <div style={{ margin: 0 }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
