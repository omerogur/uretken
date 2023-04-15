import './App.css';
import 'antd/dist/antd.css'

import Layout from './Layout';
import CardProvider from './context/CardContext';
import { FirebaseProvider } from './context/FirebaseContext';
function App() {
  return (
          <CardProvider>
           <FirebaseProvider>
          <Layout/>
           </FirebaseProvider>
          </CardProvider>
     
  );
}

export default App;
