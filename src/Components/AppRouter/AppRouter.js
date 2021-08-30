import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'
import { Search } from '../Search/Search'
import { Tags } from '../Tags/Tags'
import { Users } from '../Users/Users'


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/tags" component={Tags}/>
                    <Route exact path="/users" component={Users}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
