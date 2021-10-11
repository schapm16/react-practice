import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, OrganizationDetail } from './pages/'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/organization-detail' component= { OrganizationDetail }/>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
