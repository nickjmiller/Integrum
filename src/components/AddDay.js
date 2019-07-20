import React from "react";


export default class AddDay extends React.Component {
    constructor(props) {
        super(props);
        this.name = `Day ${this.props.index + 1}`;
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.name = e.target.value;
    }

    render() {
        return (
            <div>
                <h2>Add a new day</h2>
                <label>
                    Name
                    <input type="text"
                        placeholder={this.name}
                        onChange={this.handleNameChange}/>
                </label>
                <button onClick={() => this.props.addDay(this.name)}>
                    Add new day
                </button>
            </div>
        );
    }
};
