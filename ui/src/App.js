import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, OrganizationDetail } from './pages/'

export const dataCache = {
  organizations: null
}

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
