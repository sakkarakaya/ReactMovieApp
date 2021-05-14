import React from 'react'
import App from './pages/Home/App'
import Detail from './pages/Detail/Detail'
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
