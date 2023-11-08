import React  from "react";
import Heading from "./Heading";
import Content from './Content';
import List from './List';

function Main(){
    return (
        <React.Fragment>
            <Heading/>
            <Content/>
            <List/>
        </React.Fragment>
    );
}
export default Main;