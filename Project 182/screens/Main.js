import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';
import {StatusBar} from 'expo-status-bar'
import * as FaceDetector from 'expo-face-detector';

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasCameraPermission: null,
			faces: [],
		};
		this.onFacesDetected = this.onFacesDetected.bind(this);
	}

	async componentDidMount(){
		const { status } = await Camera.requestPermissionsAsync();
		thisx.setState({ hasCameraPermission: status === "granted" });
	}

	render() {
			const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		}
		if (hasCameraPermission === false) {
			return (
				<View style={styles.container}>
					<Text>No access to camera</Text>
				</View>
			);
		}
		console.log(this.state.faces);
		return (
			<View style={styles.UpperContainercontainer}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.headingContainer}>
					<Text style={styles.titleText}>LOOK ME</Text>
				</View>
				<View style={styles.MiddleContainerContainer}>
					<Camera
						style={{ flex: 1 }}
						type={Camera.Constants.Type.front}
						faceDetectorSettings={{
							mode: FaceDetector.FaceDetectorMode.fast,
							detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
							runClassifications: FaceDetector.FaceDetectorClassifications.all,
						}}
						onFacesDetected={this.onFacesDetected}
						onFacesDetectionError={this.onFacesDetectionError}
					/>
					{this.state.faces.map((face)=> (
						<Filter1 Key={`face-id-${face.ID}`} face={face} />
					))}
				</View>
				<View style={styles.LowerContainer}></View>
				<View style={styles.LowerContainer}></View>
			</View>
		);
	}
}
	
styles = StyleSheet.create({
	container: {
		UpperContainer : Appname,
		LowerContainer : CameraSection,
		MiddleContainer : ActionSection,
	},
});
