import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
        <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/edit">Edit</Link></li>
        <li><Link to="/help">Help</Link></li>
        </ul>
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
