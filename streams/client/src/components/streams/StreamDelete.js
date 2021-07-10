import React from 'react';
import Modal from '../Modal';
import StreamList from './StreamList';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  deleteStream() {
    this.props.deleteStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`;
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={() => this.deleteStream()} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancle
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <StreamList />
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
