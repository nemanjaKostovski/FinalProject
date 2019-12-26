import React, { Component } from 'react';
import { compose } from 'redux';

import Message from '../../components/Message';
import style from './index.module.css'; 
import withAuthenticated from '../../hoc/withAuthenticated';
import { connect } from 'react-redux';
import BasePage from '../BasePage';
import { getTopic, postMessage } from '../../utils/services';
import AddMessage from '../../components/AddMessage';

class TopicPage extends Component {
  state = {
    messages: [],
    title: "",
    date: ""
  }

  getTopicMessages = () => {
    const { match } = this.props;
    getTopic(match.params.id).then(data => {
      this.setState({messages: data.messages})
    });
  }

  componentDidMount() {
    const { location } = this.props;

    this.setState({title: location.state.title, date: location.state.date});

    this.getTopicMessages();
  }

  handleMessagePost = (message) => {
    const { user, match } = this.props;
    console.log('')
    postMessage({username: user.username, topic_id: match.params.id, message})
      .then(data => this.getTopicMessages())
      .catch();
  }

  render() {
    const { isAuthenticated, history} = this.props;
    const { messages, title, date } = this.state;

    return (
      <BasePage isAuthenticated={isAuthenticated}>
        <section className={style["topic-container"]}>
          <h1 className={style.title}>{title.toString()}</h1>
          <h3 className={style.title}>{date}</h3>
          <ul className={style["messages-container"]}>
            {messages.length ? 
              messages.map( message => (
                <Message 
                  key={message.message_id}
                  message={message.message} 
                  username={message.username}
                  userId={message.user_id}
                  date={new Date(message.timestamp).toLocaleDateString()}
                  history={history}
                />
              ))
            : <div className={style.empty} >{"No messages here!"}</div>}
          </ul>
          <AddMessage onClick={this.handleMessagePost} />
        </section>
      </BasePage>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  user: state.authentication.user
});

export default compose(
  connect(mapStateToProps),
  withAuthenticated
)(TopicPage);