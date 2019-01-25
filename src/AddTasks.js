import React, {Component} from 'react';

class AddTask extends Component{
    state = {
        name : null
    }
    
    HandleInput = (input) =>{
        this.setState({
            [input.target.id] : input.target.value
        })
    }

    HandleSubmit = (e) =>{
        e.preventDefault();
        this.props.addtask(this.state);
    }

    render(){
        return (
            <div className="add-task">
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="task">Enter the task:</label>
                    <input type="text" id='name' onChange={this.HandleInput}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddTask