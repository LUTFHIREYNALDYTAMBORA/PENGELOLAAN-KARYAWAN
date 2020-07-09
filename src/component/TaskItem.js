import React, { Component } from 'react';

class TaskItem extends Component {

    _handleUpdateStatus = () => {
        // console.log(this.props.task.id);
        this.props._handleUpdateStatus(this.props.task.id);
        
    }

    _handleDelete = () => {
        // console.log('ini delete');
        this.props._handleDelete(this.props.task.id);
    }

    _handleEdit = () => {
        this.props._handleEdit(this.props.task.id);
    }

    render() {
        
        let { task, index } = this.props;

        return (
            <tr>
                <td> {index + 1} </td>
                <td> {task.name} </td>
                <td className="text-center">
                    <span className={task.status === true ? 'label label-success' : 'label label-danger'} onClick={this._handleUpdateStatus}> {task.status === true ? 'Aktif' : 'Tidak Aktif'} </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={this._handleEdit}
                    >
                        <span className="fa fa-pencil mr-5"></span> Edit
                    </button> &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this._handleDelete}
                    >
                        <span className="fa fa-trash mr-5"></span> Hapus
                    </button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;