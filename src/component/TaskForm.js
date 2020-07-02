import React, { Component } from 'react';


class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            status : false
        }
    }

    _handleCloseForm = () => {
        this.props._handleCloseForm();
    }

    _handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState ({
            [name] : value
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        
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
                                        <option value={true}>Aktif</option>
                                        <option value={false}>Tidak Aktif</option>
                                    </select><br/><br/>
                                    <div className="text-right">
                                        <button type="button" className="btn btn-warning" style={{marginLeft:'138px'}}>
                                            <span className="fa fa-plus mr-3"></span>Simpan
                                        </button> &nbsp;
                                        <button type="button" className="btn btn-danger">
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
