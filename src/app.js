import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => (
    <div>
        This is from my DASHBOARD component.
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my ADD expense component.
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my EDIT expense component.
    </div>
);

const HelpPage = () => (
    <div>
        This is from my HELP component.
    </div>
);

const NotFoundPage = () => (
    <div>
        <p>404!</p>
        <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
        
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
