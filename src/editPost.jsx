import React from 'react';
import {editPost, getPost} from './api';
import { connect } from 'react-redux';
import {seePost} from "./actions";
import { Link } from 'react-router-dom'
import {store} from "./store";

class EditPostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    onChange = (e) => {
             //this.props.post.title: e.target.value
    };

    onSubmit = (e) => {

    };


    componentDidMount() {

    }

    render() {

    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostComponent);