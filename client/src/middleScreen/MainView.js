import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import NavTabs from './NavTabs';
import MyInfoTab from './MyInfoTab';
import Logs from './Logs';
import Actions from './Actions';
import PlayersTab from './PlayersTab';
import MousedOverTileTab from './MousedOverTileTab';

class MainView extends Component {
    state = {
        dropdownExpanded: false,
        selectedTab: "my_info",
        selectedPlayer: 1,
    };

    selectTab = (state) => {
        this.setState(state);
    };
    changeDropDown = (state) => {
        this.setState(state);
    };

    render() {
        return (
            <div className="main-view desktop-view">
                {this.props.store.game && this.props.store.game.game_state !== "NOT_STARTED" &&
                <div className="main-view-content">
                    {this.props.store.mousedOverTile !== null && (
                        <MousedOverTileTab/>
                    )}
                    {this.props.store.mousedOverTile === null && (
                        <>
                            <NavTabs
                                dropdownExpanded={this.state.dropdownExpanded}
                                changeDropDown={this.changeDropDown}
                                selectTab={this.selectTab}
                                selectedTab={this.state.selectedTab}
                            />
                            {this.state.selectedTab === "my_info" && (
                                <>
                                    <MyInfoTab/>
                                    <Actions/>
                                    <Logs/>
                                </>
                            )}
                            {this.state.selectedTab === "player_info" && (
                                <PlayersTab selectTab={this.selectTab} player={this.state.selectedPlayer}/>
                            )}
                        </>
                    )}

                </div>
                }
            </div>
        );
    }
}

export default inject("store")(observer(MainView));