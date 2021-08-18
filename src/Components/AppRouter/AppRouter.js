import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
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
                    <Route path="/" component={Search}/>
                    <Route path="/tags" component={Tags}/>
                    <Route path="/users" component={Users}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
