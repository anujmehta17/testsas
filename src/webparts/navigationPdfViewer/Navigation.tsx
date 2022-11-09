import SiteNavigationWebpart from "./components/SiteNavigationWebpart";
import Reducer from "./Store/Reducers";
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { ISiteNavigationWebpartProps } from "./components/ISiteNavigationWebpartProps";
import * as React from "react";

const store = createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)));
const Navigation=(props:ISiteNavigationWebpartProps)=>{
return(
    <Provider store={store}>
        <SiteNavigationWebpart pagectx={props.pagectx} ctx={props.ctx} description={""} />
    </Provider>
)
}
export default Navigation;