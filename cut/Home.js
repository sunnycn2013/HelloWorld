var React = require('react-native');

var {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	ScrollView,
	ListView,
} = React;

var cutList = require('./CutList');

var Home = React.createClass({

	render:function () {
		return (
			<TouchableHighlight onPress={()=> this.goToNext()}>
			<View style={styles.style_0}>
				<Text style={styles.des}>go to cut</Text>
			</View>
			</TouchableHighlight>
          );
	},

	goToNext:function(){
		this.props.navigator.push({
      		component: cutList,
    });
	},

});

var styles = StyleSheet.create({
    style_0:{
    	backgroundColor:'white',
    },
    des:{
    	color:'red',
    	fontSize:17,
    	margin:100,
    	backgroundColor:'blue',
    },
});

module.exports = Home;