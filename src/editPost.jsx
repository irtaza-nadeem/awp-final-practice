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
        }
    }

    onChange = (e) => {

    };

    onSubmit = (e) => {
        const data = this.props.post;
        this.props.editUserProp(data, this.props.match.params.id);
    };

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        const {title, body} = this.props.post;
        return <div>
            <h1>Edit Post</h1>
            <h3>{title}</h3>
            <div>
                <span>Title</span>
                <input type="text" name="title" defaultValue={title} onChange={this.onChange}/>
            </div>
            <div>
                <span>Body</span>
                <input
                    type="text"
                       name="body"
                    defaultValue={body}
                       onChange={this.onChange} />
            </div>
            <Link  to={"/posts/"+this.props.match.params.id}><button onClick={this.onSubmit}>Update</button></Link>
        </div>
    }
}

const mapStateToProps = (state) => ({
    post: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
    getPost: (id) => getPost(dispatch, id),
    editUserProp: (data, id) => editPost(dispatch, data, id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostComponent);