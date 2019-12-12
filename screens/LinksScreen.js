import React from "react";
import CameraPage from "../components/CameraPage";
import {Camera} from 'expo-camera'
import HomeScreen from '../screens/HomeScreen'

export default class LinksScreen extends React.Component {
    render() {
        return (
            <CameraPage/>
        );
    };
};


// LinksScreen.navigationOptions = {
//   title:"Dont Forget To Smile"
// };
