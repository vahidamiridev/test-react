import withData from './HOF/change'
import './App.css';


import Layout from './components/layout/Layout';

function App(props) {
  
  return (
    <>
      <Layout/>
    </>
  )
}

export default withData(App , 'green') ;
