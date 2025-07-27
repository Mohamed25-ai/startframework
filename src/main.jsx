import  ReactDom  from 'react-dom/client';
import  App  from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const rootElement=ReactDom.createRoot(document.getElementById("root"));
rootElement.render(<App />);

