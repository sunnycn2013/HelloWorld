---
layout:     post
title:      "React-Native牛刀小试仿京东砍啊砍砍到你手软 "
subtitle:   "React-Native牛刀小试仿京东砍啊砍砍到你手软"
date:       2015-10-29
author:     "Scenery"
header-img: "img/post-bg-alitrip.jpg"
tags:
    - iOS
    - React-Native
    - 电子商务
---


##React-Native牛刀小试仿京东砍啊砍砍到你手软


###React-Native基础教程


*[React-Native基础篇](http://www.cnblogs.com/vczero/p/react-native.html)[作者git](https://github.com/vczero/react-native-lession)

*[React-Native官方文档](http://facebook.github.io/react-native/docs/getting-started.html#content)

*[Demo](https://github.com/ccguo/HelloWorld)


&nbsp;&nbsp;&nbsp;&nbsp;几个月前facebook推出了React Native框架，允许开发着使用javascript代码来实现iOS原生的应用，随后十月份安卓版的也相继问世，从此我们可以优雅的Learn once, write anywhere...

&nbsp;&nbsp;&nbsp;&nbsp;早在几年前开发者就开始使用javascript＋html和PhoneGap来编写各式各样的app了，开发者可以优雅的完成一套js的shell，然后分别在不同的平台下进行打包，最终生成不同平台的app，知识app的最终的展现形式都是html类型的。一度曾经出现webapp 是否要取代native ，这么多年过去，结果大家也不言而知了。

&nbsp;&nbsp;&nbsp;&nbsp;但是react native的确是一个很了不起的东西，开发者们都不禁为之欢呼，react native所展现出来的应用实质上是native应用，开发者完成同一套js代码，分别在iOS和安卓平台下分别打包最终分别能映射生成分属不同的安卓原生应用与iOS原生应用，这个优势可能是目前为止被广大开发最为喜欢的地方，一直以来web app最为大家所诟病的可能就是html的页面永远无法与原生页面的体验相比拟。

* 通过react native框架，你可以用JavaScript来编写和运行应用程序逻辑，而UI却可以是真正的本地代码编写的，因此，你完全不需要一个HTML5编写的UI。

* React框架采用了一种新颖的、激进的和高度函数式的方式来构建UI。简单说，应用程序的UI可以简单地用一个函数来表示应用程序当前的状态

&nbsp;&nbsp;&nbsp;&nbsp;React Native的重点是把React编程模型引进到移动App的开发中去。它的目的并不是跨平台，一次编写到处运行。它真正的目标是“一次学习多处编写”。这是一个重大的区别。本教程只涉及iOS，但一旦你学会了它的思想，你就可以快速将同样的知识应用到Android App的编写上。

&nbsp;&nbsp;&nbsp;&nbsp;React Native的编写模式更加友好于从事于js的前端开发者，它本身采用了React js的模式，尤其是从事React js的开发人员，只需要熟悉下基本的文档就能瞬间变成一个iOS＋安卓双向通吃的移动专家，React内部引入可一些新的概念，如 DOM和reconciliation，React直接将函数式编程的理念用到了UI层面。
不过相对来说，OC的开发人员只要熟悉一下基本demo看上几个例子应该就不会有太多问题了，如果之前有过web端开发经验的话相信上手会更快一些。

下面介绍一个简单的demo操作，这个教程一起带你去体验一下京东促销砍啊砍页面的OC->React 移植过程，通过本教程你就可以了解React Native的一些基本开发流程了。
效果：
<div>
<img class="shadow" width="728" height="426" src="http://sunnycn.gitcafe.io/images/2015-12-16/post-react-native-cut/react-native-01.png" />
</div>

如果你之前从未写过任何 JavaScript ，别担心；这篇教程带着你一点一点编写代码。React 使用 CSS 属性来定义样式，这些样式通常都很易于阅读和理解，但是如果你想进一步了解，可以参考:。
要想学习更多内容，请往下看

###开始
React native 关于环境搭建问题此处就不多说了，详情请见[React native基础教程](http://www.cnblogs.com/vczero/p/react-native.html),此处就从我们已经准备好一切前序工作开始，万事具备只欠东风，下面开始:

首先React Native 启动画面开始，创建helloworld工程，启动画面如下：
<img class="shadow" width="320" height="568" src="http://sunnycn.gitcafe.io/images/2015-12-16/post-react-native-cut/ReactNative-Starter.png" />

与此同时Xcode还会打开一个终端窗口，并显示如下信息：
<img class="shadow" width="580" height="364" src="http://sunnycn.gitcafe.io/images/2015-12-16/post-react-native-cut/termial.png" />

这是React Navtive Packager，它在node容器中运行。你待会就会发现它的用处。
千万不要关闭这个窗口，让它一直运行在后面。如果你意外关闭它，可以在Xcode中先停止程序，再重新运行程序。

>注意:
>在开始接触具体的代码之前（在本教程中，主要是js代码），我们将推荐 Sublime
>Text这个文本编辑工具，因为Xcode并不适合用于编写js代码的。当然，你也可以使用 atom, brackets
>等其他轻量级的工具来替代。

React Native完成的js完成的代码其实是跑在本地的node下面的，从appdelegate里面可以看到React Native工程会从一个本机地址“http://localhost:8081/index.ios.bundle?platform=ios&dev=true"读取一个对应的文件，这个文件中就是系统已经自动帮你打包压缩整合过以后的一个js 代码库，接下来React Native引擎会将这个库中的js代码完全的解析、翻译成对应的iOS原生内容，最终以iOS原生UI的形式渲染到桌面上，这个就是React Native整个工作流程。


###你好， React Native


在开始编写这个demo之前我们先创建一个简单的Hello World项目，用你喜欢的文本编辑器（例如Sublime Text）打开index.ios.js ，删除所有内容。然后加入以下语句：

```
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <View>
        <View><Text>你好， React Native</Text></View> 
      </View>
    );
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

```
好了，“Hello World” 的演示就到此为止；接下来我们要编写一个真正的React App了！

###创建一个导航

这个demo使用了标准的UIKit中的导航控制器来提供”栈式导航体验“。接下来我们就来实现这个功能。

在 index.ios.js, 添加以下代码:

```
var Home = require('./cut/Home');

var HelloWorld = React.createClass(//{
  render: function() //{
    return (
      <NavigatorIOS 
             initialRoute=//{//{title:'首页',
                        component:Home,
                      //}//}//>
    );
  //}
//});

```

NavigatorIOS就是React Native中对应的导航视图，我们再次暂时可以理解就是iOS中的UINavigationController,我们在此处创建了一个基于导航的视图控制器，rootViewController对应的页面就是Home。

###创建rootView Home，添加Home.js 文件，添加代码如下：


```
var cutList = require('./CutList');
var Home = React.createClass({

	render:function (){
		return (
			<TouchableHighlight onPress={()=> this.goToNext()}>
			<View>
				<Text}>go to cut</Text>
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

```

Home 我们只放了一个按钮，按钮文字“go to cut”，另外添加了一个点击触摸事件，事件相应题是goToNext:function();   在函数处理事件内部，我们只做了页面的push跳转，目标页面是cutList页面，运行效果如下：
<img class="shadow" width="320" height="568" src="http://sunnycn.gitcafe.io/images/2015-12-16/post-react-native-cut/react-native-00.png" />


### 构建砍啊砍List页面，从网络获取数据，绘制table绑定事件

####构造顶部bunner动画图


轮播图这个地方采用了React Native的一个第三方库swiper(偷懒了)，

```
var Swiper = require('react-native-swiper');
初始化数据
var sliderImgs = [
    'http://m.360buyimg.com/mobile/s725x175_jfs/t2332/80/701506039/111191/37a1273/5624850bN2469d61f.jpg',
    'http://m.360buyimg.com/mobile/s725x175_jfs/t2401/354/694665708/117887/3a283185/56248ee2N58518e76.jpg',
    'http://m.360buyimg.com/mobile/s725x175_jfs/t2506/269/651438394/152836/cf430d42/561f6b3aN80cb83f4.jpg',
    'http://m.360buyimg.com/mobilecms/s750x410_jfs/t2326/263/687562306/170970/c3f92c7/5620cbddNaa6a2cda.jpg!q70.jpg',
    'http://m.360buyimg.com/mobilecms/s750x410_jfs/t1891/237/637408747/193879/1acee0f7/5620be19N801621e4.jpg!q70.jpg'
];

```

```
//初始化UI
render:function () \\{
		return (
			<View>
				<View>
					<Swiper style=\\{styles.wrapper\\} showsButtons=\\{false\\} autoplay=\\{true\\} height=\\{150\\} showsPagination={true}>
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
                  automaticallyAdjustContentInsets={false}//>
				</View>
			</View>
			);
	},

```
再次看到render:function()这个函数，应该没那么陌生了吧，暂时可以理解render相当于ViewController中的ViewDidLoad：，我们一般在render里面做一些初始化UI视图的工作，此处我们初始化了swiper和ListView

> swiper
> * showsButtons&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(bool)&nbsp;&nbsp;&nbsp;是否显示左右切换按钮(显示两个按钮左切 友切)
> * autoplay&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(bool)&nbsp;&nbsp;&nbsp;是否开启自动播放
> * height&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(bool) &nbsp;&nbsp;&nbsp;高度(不解释)
> * showsPagination&nbsp;&nbsp;(bool)&nbsp;&nbsp;&nbsp;是否显示pageControl


> ListView
> * dataSource  绑定数据源
> * renderRow   cell绑定函数事件(等价于tableView:cellForRowAtIndexPath:)
> * automaticallyAdjustContentInsets UI布局相关的

####初始化数据源


```

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

```

getInitialState:function()类似于OC中的init函数，我们一般的习惯喜欢在init函数初始化一个变量等数据，在React Native依旧是这样。

####发起网络请求，获取数据，缓存在全局变量List中


```
//定义request url 
var urlPath = 'http://sunnycn.gitcafe.io/ccguo/cut.json';
var CACHE = [];

//componentDidMount:function  系统方法
componentDidMount:function(){
  		this.fetchData();
  	},
//自定义函数处理网络获取数据，将数据放入全局变量CACHE
  	cache:function(items){
      for (var i in items) {
        CACHE.push(items[i]);
      }
      this.setState({
               dataSource: this.state.dataSource.cloneWithRows(CACHE),
        });
    },

```


```
//发起 网络请求，获得json
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

```

&nbsp;&nbsp;&nbsp;&nbsp;这个过程模拟了在iOS原生应用里面，初始化网络request，发起网络请求，得到数据，解析数据，然后将数据存入list这一些列操作，其实在js中，js脚本处理json的能力还是很强的，我们再也不需要像OC中哪些objectForKey:的操作了，我们不需要任何MJExtension、JSONModel、 Mantle等一些潜在的工具了，省去了很多的麻烦，我们直接拿到一个json对象，直接对对象进行操作。

&nbsp;&nbsp;&nbsp;&nbsp;另外React的网络请求此处我们只是使用了fetch API
[脸谱官方的api](http://facebook.github.io/react-native/docs/network.html#content)(脸谱对于网络请求提供了多种API，如：fetch WebSocket XMLHttpRequest等，具体可参照API)

&nbsp;&nbsp;&nbsp;&nbsp;从代码上看js的链式编程刚看上去有点不太习惯，不过整体使用起来还是比OC中快捷多了，foreach遍历、消息队列进出栈，总之脚步里面省去了以往还不得不在意的好多麻烦，其实这块相对swift而言，新的版本中渐渐的已经得到了部分提升，不过还是要感谢脸谱团队，没有他们，可能还见识不到React的强大。


#### 构建cell


```
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

```

在上述初始化ListView UI的时间，我们指定了renderRow 对应的action事件，此处我们可以直接在_renderRow:function中构建自己的cell模版，至于React Native中UI的标签基本用法，大家可以去头部基础教程里面找，有点类似于html标签，总之我们在_renderRow:function纯碎是构造cell的代码，这个类似于tableViewCell subClass, cell点击事件我们使用一个TouchableHighlight来代替

```
 <TouchableHighlight onPress={() => this._pressRow(data,rowID)}>
 ....
 </TouchableHighlight>
```

TouchableHighlight事件处理action同样是一个函数（不解释），在_pressRow事件中我们处理自己的cell点击跳转，顺便插一句下一步的操作，_pressRow（data,rowID）是带有形参的
另外 ListView renderRow 事件的重载函数，形参类型这个具体参照[脸谱官方的api](http://facebook.github.io/react-native/docs/listview.html#content)

_renderRow:function(data,sectionID,rowID)。

整体运行效果如下：
<img class="shadow" width="320" height="568" src="http://sunnycn.gitcafe.io/images/2015-12-16/post-react-native-cut/react-native-02.png" />

####处理cell跳转事件


```
var detail = require('./Detail');

 _pressRow: function(data,rowID) {
    this.props.navigator.push({
      component: detail,
      passProps: {data: data}
    });
  },

```

React在处理事件跳转的时间，仍旧采用进栈出栈的形式，这一点和Apple的理念还是类似的。

> * component: &nbsp;&nbsp;&nbsp;&nbsp;参数对应将要跳转的目标页面，
> * passProps: &nbsp;&nbsp;&nbsp;&nbsp;传参字典，内部为key-val形式，相当于一个容器，到了目标页面后可以根据key从容器中取出传递的值。

#### 获取页面跳转时间容器中的值

```
<Text style={styles.view}>{this.props.data.wname}</Text>
```
到了目标页面后，我们直接从props容器直接根据key就能将传递的参数去处，此处我们传递参数的本身是一个json,我们只是讲wname显示到detail页面。
效果如下：
<img class="shadow" width="320" height="568" src="http://sunnycn.gitcafe.io/images/2015-12-16/post-react-native-cut/react-native-03.png" />
<img class="shadow" width="580" height="368" src="http://sunnycn.gitcafe.io/images/2015-12-16/post-react-native-cut/react-native-01.png" />

###接下来做什么


恭喜你，你的第一个React Native App终于完成了！你可以在GitHub上找到每一个”可运行的“步骤的项目源文件，如果你搞不定的时候它们会非常有用的 :]

如果你来自Web领域，你可能觉得在代码中用JS和React框架建立基于本地化UI的App的界面并实现导航不过是小菜一碟。但如果你主要开发的是本地App，我希望你能从中感受到React Native的优点：快速的App迭代，现代JavaScript语法的支持和清晰的CSS样式规则。

在你的下一个App中，你是会使用这个框架，还是会继续顽固不化地使用Swift和O-C呢？

无论你怎么选择，我都希望你能从本文的介绍中学习到一些有趣的新东西，并把其中一些原理应用到你的下一个项目中。

如果你有任何问题及建议，请参与到下面的讨论中来！
