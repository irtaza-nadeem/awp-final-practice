import React from 'react';
import {editPost, getPost} from './api';
import { connect } from 'react-redux';
import {seePost} from "./actions";
import { Link } from 'react-router-dom'
import {store} from "./store";

class EditPostComponent extends React.Component {

    }

    onChange = (e) => {
             //this.props.post.title: e.target.value
    };

    onSubmit = (e) => {

    };

    /*componentWillReceiveProps () {
        this.setState({ posts: this.props.post});
        alert(this.props.post.title);
    }*/

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