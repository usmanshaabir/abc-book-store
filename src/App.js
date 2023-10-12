import './App.scss';
import PublicRoutes from './Pages/PublicRoutes';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Scroll from './Pages/Frontend/ScrollToTop/Scroll';



function App() {
  return (
    <>
      <PublicRoutes />
      <Scroll />

    </>
  );
}

export default App;
