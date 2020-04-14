import React, {Component} from 'react';
import Card from "./Card";
import HandCard from "./HandCard";
import MainView from "./middleScreen/MainView";
import "./App.css";
import {inject, observer} from "mobx-react";
import {withRouter} from 'react-router-dom';
import Chatbar from './Chatbar';

class Board extends Component {
    componentDidMount() {
        let gameInfo = localStorage.getItem("previous_game");
        if (!gameInfo) {
            this.props.history.push("/start");
            return;
        }
        gameInfo = JSON.parse(gameInfo);
        this.props.store.setGameAuthInfo(gameInfo);
        this.props.store.connectToGame();
        
    }

    render() {
        return (
            this.props.store.inGame ? <div
                    className="d-flex flex-column main-box">
                        <MainView/>
                    <div className="d-flex flex-row">
                        <Card position={1}/>
                        <Card top={true} position={2}/>
                        <Card top={true} position={3}/>
                        <Card top={true} position={4}/>
                        <Card top={true} position={5}/>
                        <Card top={true} position={6}/>
                        <Card top={true} position={7}/>
                        <Card top={true} position={8}/>
                        <Card top={true} position={9}/>
                        <Card top={true} position={10}/>

                    </div>
                    <div className="d-flex flex-row">
                        <Card position={11}/>
                        <Card top={true} position={12}/>
                        <Card top={true} position={13}/>
                        <Card top={true} position={14}/>
                        <Card top={true} position={15}/>
                        <Card top={true} position={16}/>
                        <Card top={true} position={17}/>
                        <Card top={true} position={18}/>
                        <Card top={true} position={19}/>
                        <Card top={true} position={20}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={21}/>
                        <Card top={true} position={22}/>
                        <Card top={true} position={23}/>
                        <Card top={true} position={24}/>
                        <Card top={true} position={25}/>
                        <Card top={true} position={26}/>
                        <Card top={true} position={27}/>
                        <Card top={true} position={28}/>
                        <Card top={true} position={29}/>
                        <Card top={true} position={30}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={31}/>
                        <Card top={true} position={32}/>
                        <Card top={true} position={33}/>
                        <Card top={true} position={34}/>
                        <Card top={true} position={35}/>
                        <Card top={true} position={36}/>
                        <Card top={true} position={37}/>
                        <Card top={true} position={38}/>
                        <Card top={true} position={39}/>
                        <Card top={true} position={40}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={41}/>
                        <Card top={true} position={42}/>
                        <Card top={true} position={43}/>
                        <Card top={true} position={44}/>
                        <Card top={true} position={45}/>
                        <Card top={true} position={46}/>
                        <Card top={true} position={47}/>
                        <Card top={true} position={48}/>
                        <Card top={true} position={49}/>
                        <Card top={true} position={50}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={51}/>
                        <Card top={true} position={52}/>
                        <Card top={true} position={53}/>
                        <Card top={true} position={54}/>
                        <Card top={true} position={55}/>
                        <Card top={true} position={56}/>
                        <Card top={true} position={57}/>
                        <Card top={true} position={58}/>
                        <Card top={true} position={59}/>
                        <Card top={true} position={60}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={61}/>
                        <Card top={true} position={62}/>
                        <Card top={true} position={63}/>
                        <Card top={true} position={64}/>
                        <Card top={true} position={65}/>
                        <Card top={true} position={66}/>
                        <Card top={true} position={67}/>
                        <Card top={true} position={68}/>
                        <Card top={true} position={69}/>
                        <Card top={true} position={70}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={71}/>
                        <Card top={true} position={72}/>
                        <Card top={true} position={73}/>
                        <Card top={true} position={74}/>
                        <Card top={true} position={75}/>
                        <Card top={true} position={76}/>
                        <Card top={true} position={77}/>
                        <Card top={true} position={78}/>
                        <Card top={true} position={79}/>
                        <Card top={true} position={80}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={81}/>
                        <Card top={true} position={82}/>
                        <Card top={true} position={83}/>
                        <Card top={true} position={84}/>
                        <Card top={true} position={85}/>
                        <Card top={true} position={86}/>
                        <Card top={true} position={87}/>
                        <Card top={true} position={88}/>
                        <Card top={true} position={89}/>
                        <Card top={true} position={90}/>
                    </div>
                    <div className="d-flex flex-row">
                        <Card position={91}/>
                        <Card top={true} position={92}/>
                        <Card top={true} position={93}/>
                        <Card top={true} position={94}/>
                        <Card top={true} position={95}/>
                        <Card top={true} position={96}/>
                        <Card top={true} position={97}/>
                        <Card top={true} position={98}/>
                        <Card top={true} position={99}/>
                        <Card top={true} position={100}/>
                    </div>
                    <Chatbar/>
                    <div className="d-flex flex-row">
                        <HandCard top={true} position={92}/>
                        <HandCard top={true} position={94}/>
                        <HandCard top={true} position={96}/>
                        <HandCard top={true} position={98}/>
                        <HandCard top={true} position={99}/>
                    </div>
                </div>
                :
                <div style={{margin: "auto", textAlign: "center", fontSize: 80}}><i
                    className="fas fa-spinner  fa-spin"/></div>
        );
    }
}

export default withRouter(inject("store")(observer(Board)));
