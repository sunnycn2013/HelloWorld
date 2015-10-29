/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Home = require('./cut/Home');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
} = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <NavigatorIOS style={styles.container} 
             initialRoute={{title:'首页',
                        component:Home,
                      }}/>
    );
  }
});

var styles = StyleSheet.create({
   container:{
      flex:1,
   },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
