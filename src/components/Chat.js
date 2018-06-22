import React from 'react';
import '../static/css/chat.css';

class Chat extends React.Component {
    render() {
        return (
            <div className="chat">
                <div className="chat_info">
                    <div className="chat_info_avatar" />
                    <div className="chat_info_name">{this.props.name}</div>
                    <div className="chat_info_time">{this.props.timeOfLastVisit}</div>
                </div>
                <div className="chat_controls">
                    <span className="chat_controls_call" />
                    <span className="chat_controls_search" />
                    <span className="chat_controls_more" />
                </div>
                <div className="chat_messages"> 
                </div>
                <div className="chat_controls_msg">
                    <span className="chat_controls_msg_file" />
                    <input className="chat_controls_msg_input" />
                    <span className="chat_controls_msg_smile" />
                    <span className="chat_controls_msg_audio" />
                    <span className="chat_controls_msg_send" />
                </div>
            </div>
        );
    }
}

export default Chat;
