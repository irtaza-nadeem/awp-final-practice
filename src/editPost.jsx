import React from 'react';
import {editPost, getPost} from './api';
import { connect } from 'react-redux';
import {seePost} from "./actions";

class EditPostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*'id': '',
            'title': '',
            'body': '',
            'userId': ''*/
            post:[]
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

/*    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }*/

    onSubmit = () => {
        const payload = {...this.state};
        this.props.editUserProp(payload, this.props.match.params.id);
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => this.setState({'post':json}))
        //this.props.getPost(this.props.match.params.id);
    }

    render() {
        const {title, body} = this.state.post;
        return <div>
            <h1>Edit Post</h1>
            <div>
                <span>Title</span>
                <textarea name={'title'} defaultValue={title} onChange={this.onChange}/>
            </div>
            <div>
                <span>Body</span>
                <textarea
                       name={'body'}
                       defaultValue={body}
                       onChange={this.onChange} />
            </div>
            <button onClick={this.onSubmit}>Update</button>
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