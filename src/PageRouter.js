import React from 'react';
import {Route, Switch} from "react-router";
import {Writeups} from "./components/Writeups/Writeups";
import {htbWriteups, thmWriteups} from "./components/Writeups/data";
import {SlideShowUI} from "./components/SlideShow";

const PageRouter = props => {

    return (
        <Switch>
            <Route path={"/portfolio"} exact component={SlideShowUI}/>
            <Route path={"/portfolio/writeups/htb"} exact component={Writeups}/>
            <Route path={"/portfolio/writeups/thm"} component={Writeups} exact/>
        </Switch>
    );
};


export default PageRouter;