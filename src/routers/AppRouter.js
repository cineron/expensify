import React from "react";
import NotFoundPage from "../components/404";
import AddExpensePage from "../components/add";
import EditExpensePage from "../components/edit";
import ExpenseDashboardPage from "../components/dashboard";
import Header from "../components/header";
import HelpPage from "../components/help";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Instead of using export
// Use a stateless functional component
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter; 