import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'

import TableList from './TableList.jsx';
import VersionEditor from './editors/VersionEditor.jsx';
import EnchantmentEditor from './editors/EnchantmentEditor.jsx';
import BlockEditor from './editors/BlockEditor.jsx';
import ItemEditor from './editors/ItemEditor.jsx'
import {loadVersionData} from './widget/Version.jsx';

import App from './app.jsx';

console.log("Preloading data");
loadVersionData().then(() => {
    console.log("App started.");
    ReactDOM.render(<Router history={hashHistory}>
        <Route path="/" component={App} >
            <Route path="/versions/:version" component={VersionEditor} />
            <Route path="/enchantments/:mod/:id" component={EnchantmentEditor} />
            <Route path="/blocks/:mod/:id" component={BlockEditor} />
            <Route path="/items/:mod/:id" component={ItemEditor} />
            <Route path="/:tableName" component={TableList} />
        </Route>
        
    </Router>, document.getElementById("app")
    );
});
