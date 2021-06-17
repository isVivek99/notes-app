import React from 'react';
import NavBar from './NavBar';
import NotesInput from './NotesInput';
import Notecard from "./Notecard";
const Home = () => {
    return ( 
        <div>
            <NavBar/>
            <NotesInput/>
            <Notecard/>
        </div>
     );
}
 
export default Home;