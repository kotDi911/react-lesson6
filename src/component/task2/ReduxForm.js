import React, {Component} from "react";
import {connect} from "react-redux";
import {commentCreate} from "../../redux/actions";

class ReduxForm extends Component {
    state = {
        name: "",
        email: "",
        body: "",

    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, body} = this.state;

        if(!name.trim() || !email.trim() || !body.trim()){
            return;
        }

        const newComment = {
            name,
            email,
            body,
            id: Date.now().toString(),
        }

        this.props.commentCreate(newComment)
        this.setState({name: "", email: "", body:"",})
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="input__label" htmlFor="name">
                    Name
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="input__label" htmlFor="email">
                    Email
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="input__label" htmlFor="body">
                    Text
                    <textarea
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                    />
                </label>
                <button className="submit-btn" type="submit">Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    commentCreate: commentCreate,
}

export default connect(null, mapDispatchToProps)(ReduxForm)