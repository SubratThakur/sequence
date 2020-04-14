import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

class MousedOverTileTab extends Component {
    state = {};

    render() {
        const tile = this.props.store.game.board[this.props.store.mousedOverTile];
        const playersOnTile = this.props.store.game.player_info.map((player, i) => ({
            ...player,
            index: i
        })).filter(player => player.state !== "OUT").filter(player => player.position === this.props.store.mousedOverTile);
        let relatedTiles = [];
        if (tile.type === "rr" || tile.type === "utility") {
            relatedTiles = this.props.store.game.board.filter((tile, i) => tile.type === this.props.store.game.board[this.props.store.mousedOverTile].type && i !== this.props.store.mousedOverTile);
        } else if (tile.type === "property") {
            relatedTiles = this.props.store.game.board.filter((tile, i) => tile.group === this.props.store.game.board[this.props.store.mousedOverTile].group && i !== this.props.store.mousedOverTile);
        }
        return (
            <div className="d-flex flex-column align-items-center justify-content-center tile-info-container">
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="tile-info-image-div" style={{
                            backgroundImage: `url(${tile.url})`,
                        }}/>
                        <div className="tile-info-name">
                            {tile.name}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject("store")(observer(MousedOverTileTab));