import React, { Component } from 'react';


class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status : 0
        }
    }

    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id : this.props.task.id,
                name : this.props.task.name,
                status : this.props.task.status
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id : nextProps.task.id,
                name : nextProps.task.name,
                status : nextProps.task.status
            })
        } else if (!nextProps.task) {
            this.setState({
                id : '',
                name : '',
                status : 0
            })
        }
    }

    _handleCloseForm = () => {
        this.props._handleCloseForm();
    }

    _handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState ({
            [name] : value
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault(e);
        this.props.onSubmit(this.state);
        this._handleReset();
        // console.log(this.state);
    }

    _handleReset = () => {
        // console.log('ini reset');
        this.setState({
            name : '',
            status : 0
        })
        
    }

    render () {


        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* Form */}
                <div className="panel panel-warning">
                            <div className="panel-heading">
                                   <h3 className="panel-title">TAMBAH PEKERJA
                                        <span 
                                            className="fa fa-times-circle text-right" onClick={this._handleCloseForm}
                                        />
                                    </h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this._handleSubmit}>
                                    <div className="form-group">
                                        <label>Nama :</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Masukkan Nama"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this._handleChange}
                                        />
                                    </div>
                                    <label>Status :</label> <br/>
                                    <select
                                        className="form-control"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this._handleChange}
                                    >
                                        <option value={0}>--Pilih Status--</option>
                                        <option value={true}>Aktif</option>
                                        <option value={false}>Tidak Aktif</option>
                                    </select><br/><br/>
                                    <div className="text-right">
                                        <button 
                                            type="button" 
                                            className="btn btn-warning" 
                                            style={{marginLeft:'138px'}}
                                            onClick={this._handleSubmit}
                                        >
                                            <span className="fa fa-plus mr-3"></span>Simpan
                                        </button> &nbsp;
                                        <button 
                                            type="button" 
                                            className="btn btn-danger"
                                            onClick={this._handleReset}
                                        >
                                            <span className="fa fa-close mr-3"></span>Batal
                                        </button>
                                    </div>  
                                </form>
                            </div>
                       </div>
            </div>  
        );
    }
}

export default TaskForm;
