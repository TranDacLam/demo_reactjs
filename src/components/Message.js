import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <h3 className="message">
                <span className="badge amber darken-2">Mua hàng thành công!</span>
            </h3>
        );
    }
}

export default Message;