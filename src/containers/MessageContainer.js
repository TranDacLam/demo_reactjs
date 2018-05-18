import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './../components/Message';
import { connect } from 'react-redux';

class MessageContainer extends Component {
    render() {
        var { message } = this.props;
        return (
            <Message message={message} />
        );
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStatetoProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStatetoProps, null)(MessageContainer);