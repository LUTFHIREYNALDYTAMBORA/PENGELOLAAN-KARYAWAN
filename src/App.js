import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
// import { data } from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [], // id : unique, name, status
            isDisplayForm : false,
            taskEdit : null,
            filter : {
                name : '',
                status : -1
            },
            keyword : '',
            sort :  {
                by : 'name',
                value : 1
            }
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')){ 
            let tasks = JSON.parse( localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            })
        }
    }

    _handleToggleForm = () => { //tambah pekerjaan
        if (this.state.isDisplayForm && this.state.taskEdit !== null) {
            this.setState({
                // isDisplayForm : true,
                taskEdit : null
            });
        } else {
            this.setState({
                isDisplayForm : true,
                taskEdit : null
            });
        }
    }
    
    _handleCloseForm = () => {
        this.setState({
            isDisplayForm : false
        });
    }

    _handleShowForm = () => {
        this.setState({
            isDisplayForm : true
        });
    }

    _handleSubmit = (data) => {
        let { tasks } = this.state; // task = this.state.tasks
        if (data.id === '') {
            data.id = this.genetateID(); // task
            tasks.push(data);
        } else {
            // Edit
            let index = this._handleFindIndex(data.id);
            tasks[index] = data;
        }
        this.setState ({
            tasks : tasks,
            taskEdit : null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    _handleUpdateStatus = (id) => {
        let { tasks } = this.state;
        // console.log(id);
        let index = this._handleFindIndex(id);
        if(index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks : tasks
            }) 
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    _handleDelete = (id) => {
        let { tasks } = this.state;
        let index = this._handleFindIndex(id);
        if(index !== -1) {
            tasks.splice(index, 1)
            this.setState({
                tasks : tasks
            }) 
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    _handleEdit = (id) => {
        let { tasks } = this.state;
        let index = this._handleFindIndex(id);
        let taskEdit = tasks[index];
        this.setState({
            taskEdit : taskEdit
        });
        this._handleShowForm();
    }

    _handleFindIndex = (id) => {
        let { tasks } = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                result =  index;
            }
        });
        return result;
    }

    _handleFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter : {
                name : filterName.toLowerCase(),
                status : filterStatus
            }
        });
    }

    _handleSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
    }

    s4() {
        return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    genetateID() {
        return this.s4();
    }

    render () {

        let { tasks, isDisplayForm, taskEdit, filter, keyword } = this.state;
        if (filter) {
            if(filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            tasks = tasks.filter((task) => {
                if(filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 1 ? true : false);
                }
            })
        }

        if(keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }

        let elmTaskForm = isDisplayForm 
            ? <TaskForm 
                onSubmit={this._handleSubmit} 
                _handleCloseForm={this._handleCloseForm} 
                task={taskEdit}
                /> : '';

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
                        
                        <Control 
                            _handleSearch = {this._handleSearch}
                        />

                        <TaskList 
                            tasks = { tasks } 
                            _handleUpdateStatus={this._handleUpdateStatus} 
                            _handleDelete={this._handleDelete}
                            _handleEdit={this._handleEdit}
                            _handleFilter={this._handleFilter}
                        />
                    
                    </div>
                </div>
           </div> 
        );
    }
}

export default App;
