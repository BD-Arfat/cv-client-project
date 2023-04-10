import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routs/Roust';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="  md:w-5/6 md:mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
    
  );
}

export default App;
