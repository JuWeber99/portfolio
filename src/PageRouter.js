import React from 'react';
import {Route, Switch} from "react-router";
import {Writeups} from "./components/Writeups/Writeups";
import {htbWriteups, thmWriteups} from "./components/Writeups/data";
import {SlideShowUI} from "./components/SlideShow";

export const PageRouter = props => {

    return (
        <Switch>
            <Route path={"/portfolio"} exact component={SlideShowUI}/>
            <Route path={"/portfolio/writeups/htb"} exact component={ () => <Writeups data={htbWriteups}/>}/>
            <Route path={"/portfolio/writeups/thm"} component={() => <Writeups data={thmWriteups}/>} exact/>
        </Switch>
    );
};

