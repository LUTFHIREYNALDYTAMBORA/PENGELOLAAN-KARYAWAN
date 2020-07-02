import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [], // id : unique, name, status
            isDisplayForm : false 
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('task')){ 
            let tasks = JSON.parse( localStorage.getItem('task'));
            this.setState({
                tasks : tasks
            })
        }
    }

    _handleGenerateData = () => {
        let tasks = [
            {
                id : this.genetateID(),
                name : 'Lutfhi',
                status : true
            },
            {
                id : this.genetateID(),
                name : 'Reynaldy',
                status : false
            },
            {
                id : this.genetateID(),
                name : 'Tambora',
                status : true
            }
        ];
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    _handleToggleForm = () => {
        this.setState({
            isDisplayForm : true
        });
    }
    
    _handleCloseForm = () => {
        this.setState({
            isDisplayForm : false
        });
    }

    s4() {
        return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    genetateID() {
        return this.s4();
    }

    render () {

        let { tasks, isDisplayForm } = this.state; // let tasks = this.state.tasks
        let elmTaskForm = isDisplayForm ? <TaskForm _handleCloseForm={this._handleCloseForm} /> : '';


        return (
            <div className="container">
                    <div className="text-center">
                        <h1>--- PENGELOLAAN KARYAWAN ---</h1>
                </div> <br/><br/>

                <div class="row">
                    <div class={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        { elmTaskForm }    
                    </div>
                    
                    
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : '"col-xs-12 col-sm-12 col-md-12 col-lg-12"'}>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={this._handleToggleForm}
                        >
                            <span className="fa fa-plus mr-5"></span>Tambah Pekerjaan
                        </button>
                        <button type="button" className="btn btn-danger ml-5" onClick={this._handleGenerateData}>
                        Generate Data
                        </button>
                        
                        <Control />
                        <TaskList tasks = { tasks } />
                    
                    </div>
                </div>
           </div> 
        );
    }
}

export default App;
