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

var Detail = React.createClass({

	render:function () {
		return (
			<Text style={styles.view}>{this.props.data.wname}</Text>
          );
	},
});

var styles = StyleSheet.create({
    style_0:{
		flex:1,
		borderWidth:1,
		borderColor:'red',
		justifyContent:'center',
		alignItems:'center',
	},
	view:{
		marginTop:150,
		marginLeft:13,
		height:250,
		width:350,
		borderColor:'blue',
		fontSize:18,
	},
});

module.exports = Detail;