import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Player from './Player';
import interact from 'interactjs'

// import tiles from '../../server/monopoly';
var cardname = '';
class HandCard extends Component {
    
    render() {
        const boxShadow = {};
        cardname = this.props.store.game.board[this.props.position].name;
        if (this.props.top) {
            boxShadow.boxShadow = `0px 1px 0px 0px`
        }
        if (this.props.bottom) {
            boxShadow.boxShadow = `0px -1px 0px 0px`
        }

        return (
            <div
                ref={this.props.store.game.board[this.props.position].name}
                // onClick={() => this.props.store.devMoveHere(this.props.position)}
                style={{
                    backgroundImage: `url(${this.props.store.game.board[this.props.position].url})`,
                    ...boxShadow,
                }}
                className={`drag-card item game-tile d-flex flex-wrap align-content-between zoom justify-content-between ${this.props.store.game.board[this.props.position].name}`}
                onMouseLeave={this.props.store.clearMousedOverTile}
                onMouseEnter={() => this.props.store.setMousedOverTile(this.props.position)}
            >
                {this.props.store.game.player_info.filter(player => player.state !== "OUT").filter(player => player.position === this.props.position).map((player, i) => {
                    return <Player playerNumber={player.id} key={i}/>
                })}
                {this.props.store.game.animated_players_move.moves.filter(tileIndex => tileIndex === this.props.position).map((tileIndex, i) => {
                    return <Player key={i} moving={true}/>
                })}
                
                {this.props.top && this.props.store.game.board[this.props.position].owned && <div
                    style={{backgroundColor: this.props.store.game.player_info[this.props.store.game.board[this.props.position].player].color}}
                    className="owned-square-top"/>}
                
            </div>
        );
    }
}

export default inject("store")(observer(HandCard));
