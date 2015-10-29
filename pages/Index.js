var React = require('react-native');
var Swiper = require('react-native-swiper');

var {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	ScrollView,
	ListView,
} = React;

var Second = require('./Second');
var Index = React.createClass({

  statics:{
      title:'<ListView> -simple',
      despriction: 'Performant, scrollable list of data',
  },

  getInitialState:function(){
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      console.log('SearchPage.render');
      return {
        dataSource: ds.cloneWithRows(this._genRows({})),
      };
  },

  _pressData:({}:{[key:number]: boolean}),

  componentWillMount:function(){
    this._pressData = {};
  },

	render: function () {
		return (
			<ListView
          dataSource = {this.state.dataSource}
          renderRow={this._renderRow}/>
          );
	},
  
  _renderRow:function(rowData: string, sectionID: number, rowID: number){
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = {
      uri: THUMB_URLS[rowHash % THUMB_URLS.length],
    };

    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData + ' - '+ rowHash+'-'+THUMB_URLS.length+'-'+ LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
       </TouchableHighlight>
      );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {

    this.props.navigator.push({
      component: Second,
      passProps: {rowID: rowID}
    });

  },
});


var THUMB_URLS = ['http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png', 
'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg', 
'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png', 
'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg', 
'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png', 
'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg', 
'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png', 
'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png', 
'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png', 
'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png', 
'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png', 
'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'];
var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
    row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
    color:'#EA6644',
  },
});

module.exports = Index;