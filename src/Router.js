import React from 'react'
import App from './App'
import Detail from './components/Detail'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/" component={App}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
