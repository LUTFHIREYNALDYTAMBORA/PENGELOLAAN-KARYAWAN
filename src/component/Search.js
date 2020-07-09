import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword : ''
        }
    }

    _handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState ({
            [name] : value
        })
    }

    _handleSearch = () => {
        this.props._handleSearch(this.state.keyword);
    }


    render() {

        let {keyword} = this.state;

        return (
            <div className="row mt-15">
                        {/* Search */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group" style={{display:'flex'}}>
                        <input 
                            name="keyword"
                            type="text"
                            className="form-control"
                            placeholder="Kata Kunci"
                            value={keyword}
                            onChange={this._handleChange}
                        />
                        <span className="input-grout-btn">
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick = {this._handleSearch}
                            >
                                <span className="fa fa-search mr-5"></span>Cari
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;