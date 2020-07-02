import React, { Component } from 'react';
import Search from './Search';
import Sort from '../Sort';
// import TaskList from './TaskList';

class Control extends Component {
    render () {
        return (                  
            
                <div>        
                {/* Search & Sort */}
                <Search /> <br/>
                
                <Sort /><br/><br/>
                        
                {/* List  */}
                </div>
        );
    }
}

export default Control;
