import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {

        let { tasks } = this.props; // let tasks = this.props.tasks
        let elmTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={index} task={task} />
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
                                    />
                                </td>
                                <td>
                                    <select className="form-control" name="filterStatus">
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