import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import interact from 'interactjs'

class Chatbar extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const div = this.refs.logs;
        div.scrollTop = div.scrollHeight;
    }

    componentDidMount() {
        const div = this.refs.logs;
        div.scrollTop = div.scrollHeight;
    }

    render() {
        return (
            <div ref="logs" className="chat-area chat-area-width">
                {this.props.store.game.logs.length === 0 && (
                    <div>No actions yet...
                        <button className="btn float-right"
                        onClick={this.props.store.toggle}><i className="fa fa-bars"></i></button>
                    </div>
                )}
                {this.props.store.game.logs.map((log, i) => {
                    let date = new Date(log.time).toLocaleString();
                    date = date.slice(0, -6) + date.slice(-3, date.length);
                    return (
                        <div key={i}>
                            <span>{date}: {log.log}</span>
                            <button className="btn float-right"
                        onClick={this.props.store.toggle}><i className="fa fa-bars"></i></button>
                        </div>
                    )
                })}
                
            </div>
        );
    }
}

export default inject("store")(observer(Chatbar));