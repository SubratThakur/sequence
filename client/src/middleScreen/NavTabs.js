import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

class NavTabs extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item cursor" onClick={() => this.props.selectTab({selectedTab: "my_info"})}>
                    <div className={`nav-link ${this.props.selectedTab === "my_info" ? "active" : ""}`}>My
                        Info
                    </div>
                </li>
                <li className="nav-item dropdown cursor"
                    onMouseEnter={() => this.props.changeDropDown({dropdownExpanded: true})}
                    onMouseLeave={() => this.props.changeDropDown({dropdownExpanded: false})}
                >
                    <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                         aria-haspopup="true" aria-expanded="false">Players
                    </div>
                    <div className={`dropdown-menu ${this.props.dropdownExpanded ? "show" : ""}`}>
                        {this.props.store.game.player_info.filter(player => player.state !== "OUT").length === 1 && (
                            <div className="dropdown-item">No Players</div>
                        )}
                        {this.props.store.game.player_info.filter(player => player.state !== "OUT").length > 1 && this.props.store.game.player_info.filter(player => player.state !== "OUT").map((player, index) => ({
                            ...player,
                            index
                        })).filter(player => player.username !== this.props.store.gameAuthInfo.username).map(player =>
                            <div onClick={() => this.props.selectTab({
                                selectedTab: "player_info",
                                selectedPlayer: player.id,
                                dropdownExpanded: false,
                            })} key={player.id} className="dropdown-item">{player.username} - ({player.id + 1})</div>
                        )}
                    </div>
                </li>
                <li className="nav-item cursor float-right pos-abs right0" onClick={() => this.props.store.toggle}>
                    <button className="btn"
                        onClick={this.props.store.toggle}><i className="fa fa-home"></i> Close</button>
                </li>
            </ul>
        )
    }
}

export default inject("store")(observer(NavTabs));