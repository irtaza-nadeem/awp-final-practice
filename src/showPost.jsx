import React from 'react';
import { getPost } from './api';
import { connect } from 'react-redux';

class SelectedPostComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        return <div>
            <ul>
                {
                    <li>
                        id: {this.props.post['id']}<br/>
                        title: {this.props.post['title']}<br/>
                        body: {this.props.post['body']}<br/>
                        userId: {this.props.post['userId']}<br/>
                    </li>
                }
            </ul>
        </div>
    }
}

const mapStateToProps = (state) => ({
    post: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
    getPost: (id) => getPost(dispatch, id)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPostComponent);