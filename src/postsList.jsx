import React from 'react';
import { getPosts } from './api';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class PostsListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return <div>
            <ul>
                {
                    this.props.posts.map(post=><li>
                        id: {post.id}<br/>
                        title: {post.title}<br/>
                        body: {post.body}<br/>
                        userId: {post.userId}<br/>
                        <Link to={"/posts/"+post.id}>Show</Link>  <Link to={"/posts/"+post.id+"/edit"}>Edit</Link>
                    </li>)
                }
            </ul>
        </div>
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => getPosts(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListComponent);