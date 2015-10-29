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

var sliderImgs = [
    'http://m.360buyimg.com/mobile/s725x175_jfs/t2332/80/701506039/111191/37a1273/5624850bN2469d61f.jpg',
    'http://m.360buyimg.com/mobile/s725x175_jfs/t2401/354/694665708/117887/3a283185/56248ee2N58518e76.jpg',
    'http://m.360buyimg.com/mobile/s725x175_jfs/t2506/269/651438394/152836/cf430d42/561f6b3aN80cb83f4.jpg',
    'http://m.360buyimg.com/mobilecms/s750x410_jfs/t2326/263/687562306/170970/c3f92c7/5620cbddNaa6a2cda.jpg!q70.jpg',
    'http://m.360buyimg.com/mobilecms/s750x410_jfs/t1891/237/637408747/193879/1acee0f7/5620be19N801621e4.jpg!q70.jpg'
];
var urlPath = 'http://ccguo.gitcafe.io/cut.json';

var detail = require('./Detail');
var CACHE = [];
var CutList = React.createClass({

	getInitialState:function(){
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: new ListView.DataSource({
        	rowHasChanged: (r1, r2) => r1 !== r2
        }),
        loaded:false,
        currentPage:0,
      };
  	},

  	componentDidMount:function(){
  		this.fetchData();
  	},

  	cache:function(items){
      for (var i in items) {
        CACHE.push(items[i]);
      }
      this.setState({
               dataSource: this.state.dataSource.cloneWithRows(CACHE),
        });
    },

  	fetchData:function(){
      console.log('hello world');
  		fetch(urlPath)
  		  .then((response) => response.json())
        .then((responseText) => {
          console.log(responseText.cutList);
          this.cache(responseText.cutList);
        })
        .catch((error) => {
          console.log(error);
        });
  	},

	render:function () {
		return (
			<View style={styles.bg}>
				<View style={styles.icourseSuperView}>
					<Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={true}>
        				<Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
        				<Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
        				<Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
        				<Image style={[styles.slide,]} source={{uri: sliderImgs[3]}}></Image>
        				<Image style={[styles.slide,]} source={{uri: sliderImgs[4]}}></Image>
      				</Swiper>
				</View>

				<View style={styles.listViewSuper}>
					<ListView style={styles.tableStyle}
          				dataSource = {this.state.dataSource}
          				renderRow={this._renderRow.bind(this)}
                  pageSize={5}
                  automaticallyAdjustContentInsets={false}/>
				</View>
			</View>
			);
	},

	_renderRow:function(data,sectionID,rowID){
    return (
      <TouchableHighlight onPress={() => this._pressRow(data,rowID)}>
      <View style={{backgroundColor:'white'}}>
        <View style={{width:375,height:150,flexDirection:'row'}}>
          <View style={{flex:2,borderColor:'green',borderWidth:0.5}}>
              <Image style={{width:125,height:125,margin:10,borderWidth:0.5,borderColor:'#97979A',borderRadius:2}} source={{uri:data.img}}></Image>
          </View>
          <View style={styles.row,{flex:3,borderColor:'blue',borderWidth:0.5}}>
            <Text style={{marginLeft:20,fontSize:18,color:'black',height:84}}>
              {rowID+'-'+data.wname}
            </Text>
            <Text style={{marginLeft:20,fontSize:14,color:'black',marginTop:10}}>京东价318.00</Text>
            <View style={{marginLeft:20,width:100,borderWidth:0.5,borderColor:'red',borderRadius:1}}>
            <Text style={{fontSize:12,color:'red'}}>已有256人砍价</Text>
            <Text style={{fontSize:17,color:'white',backgroundColor:'red',textAlign:'center'}}>马上砍</Text>
            </View>
          </View>
        </View>
          <View style={styles.separator} />
      </View>  
      </TouchableHighlight>
      );
  },
  _pressRow: function(data,rowID) {
    this.props.navigator.push({
      component: detail,
      passProps: {data: data}
    });
  },



});

var styles = StyleSheet.create({
	bg:{
		margin:0,
	},
	icourseSuperView:{
		marginTop:64,
		height:131,
		borderColor:'red',
		borderWidth:0.5,
	},
  tableStyle:{
    width:375,
    height:470,
  },
    wrapper:{
    	height:130,
    },
    slide:{
    	width:375,
    	height:130,
    },
    listViewSuper:{
    	flex:10,
    	marginTop:0,
    	marginBottom:0,
		  borderColor:'blue',
		  borderWidth:0.5,
    },
    cellImage:{},
    cellCommonCtyle:{
      marginLeft:25,
    },
    cellTitle:{},
    separator:{
      borderWidth:0.5,
      borderColor:'black',
    },
});

module.exports = CutList;