import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1 // all : -1, active : 1, deactive : 0
        }
    }

    _handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.props._handleFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name] : value
        });
    }

    render() {

        let { tasks } = this.props; // let tasks = this.props.tasks
        let { filterName, filterStatus } = this.state;
        let elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task} 
                        _handleUpdateStatus={this.props._handleUpdateStatus}
                        _handleDelete={this.props._handleDelete}
                        _handleEdit={this.props._handleEdit}
                    />
        })

        return (
                    <table className="table table-border table-hover mt-15">
                        <thead>
                            <tr>
                                <th className="text-center">NO</th>
                                <th className="text-center">NAMA</th>
                                <th className="text-center">STATUS</th>
                                <th className="text-center">TINDAKAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="filterName"
                                        value={filterName}
                                        onChange={this._handleChange}
                                    />
                                </td>
                                <td>
                                    <select 
                                        className="form-control" 
                                        name="filterStatus"
                                        value={filterStatus}
                                        onChange={this._handleChange}
                                    >
                                        <option value={-1}>Pilih Status</option>
                                        <option value={0}>Non Aktif</option>
                                        <option value={1}>Aktif</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>

                            { elmTasks }

                        </tbody>
                    </table>
        )
    }
}

export default TaskList;