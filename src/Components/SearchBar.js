import React, { Component } from 'react'
 

export default class SearchBar extends Component {
    state={term:''};

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="Search-Bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                     <label>Enter search word </label>
                    <input type="text" 
                    value={this.state.term}
                    onChange={(e)=>{this.setState({term:e.target.value})}}></input>
                </form>

            </div>
        )
    }
}
