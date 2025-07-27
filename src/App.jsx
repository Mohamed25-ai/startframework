import { RouterProvider } from 'react-router-dom';
import { allRoutes } from './components/navbar/navbar';
export default function App() {
  return (
    <>
      <RouterProvider router={allRoutes}/>
    </>
  )
}


