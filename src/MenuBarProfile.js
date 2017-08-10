import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  DrawerLayoutAndroid,
  navigationView,
  TouchableHighlight,
  ScrollView,
  ListView,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Drawer from 'react-native-drawer-menu';
import {Easing} from 'react-native'; // Customize easing function (Optional) 
import TabBar from 'react-native-xtabbar';

import logoImg from './images/xelpmoc_logo.png';
import usernameImg from './images/username.png';
import pencil from './images/pencil.png';

const {width, height} = Dimensions.get('window');


class MenuBarProfile extends React.Component {
constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      disabled: false,
       dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5']),
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle () {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  /* toolbar text*/
  static navigationOptions = {
    header: null
  };
  
  
  render () {
     var { navigate } = this.props.navigation;
    var leftDrawerContent = (<View style={styles.drawerContent}>
      <View style={styles.leftBottom}>
      <TouchableOpacity style={styles.section} onPress={() => navigate('login',{})}>
                <View style={styles.inputWrapper} >
                 <Image source={usernameImg}
                    style={styles.inlineImg} />
                    <Text style={styles.label}>Login</Text>
                </View>
            </TouchableOpacity>

             <TouchableOpacity style={styles.section} onPress={() => navigate('SignUp',{})}>
                <View style={styles.inputWrapper} >
                 <Image source={usernameImg}
                    style={styles.inlineImg} />
                    <Text style={styles.label}>Sign Up</Text>
                </View>
            </TouchableOpacity>

             <TouchableOpacity style={styles.section} onPress={() => navigate('MenuBar',{})}>
                <View style={styles.inputWrapper} >
                 <Image source={usernameImg}
                    style={styles.inlineImg} />
                    <Text style={styles.label}>MenuBar</Text>
                </View>
            </TouchableOpacity>
      </View>
    </View>);
    var rightDrawerContent = (<View style={styles.drawerContent}>
      <View style={styles.leftTop}>
          <Image source={logoImg} style={styles.image} />
          <Text style={styles.profilename_txt}>Xelpmoc Design</Text>
        </View>
      <View style={styles.leftBottom}>
       <TouchableOpacity style={styles.section} onPress={() => navigate('login',{})}>
                <View style={styles.inputWrapper} >
                 <Image source={usernameImg}
                    style={styles.inlineImg} />
                    <Text style={styles.label}>Login</Text>
                </View>
            </TouchableOpacity>

             <TouchableOpacity style={styles.section} onPress={() => navigate('SignUp',{})}>
                <View style={styles.inputWrapper} >
                 <Image source={usernameImg}
                    style={styles.inlineImg} />
                    <Text style={styles.label}>Sign Up</Text>
                </View>
            </TouchableOpacity>

             <TouchableOpacity style={styles.section} onPress={() => navigate('MenuBar',{})}>
                <View style={styles.inputWrapper} >
                 <Image source={usernameImg}
                    style={styles.inlineImg} />
                    <Text style={styles.label}>MenuBar</Text>
                </View>
            </TouchableOpacity>
      </View>
    </View>);
    return (
      <Drawer
        ref={(comp) => {this.drawer = comp;}}
        style={styles.container}
        drawerWidth={width}
        leftDrawerContent={leftDrawerContent}
        rightDrawerContent={rightDrawerContent}
        type={Drawer.types.Overlay}
        customStyles={{
          leftDrawer: styles.leftDrawer,
          rightDrawer: styles.rightDrawer
        }}
        drawerWidth={300}
        disabled={this.state.disabled}
        drawerPosition={Drawer.positions.Both}
        easingFunc={Easing.ease}>
        <View style={styles.content}>
          <View style={styles.head}>

             <TouchableOpacity    underlayColor="#c33d19"
           onPress={() => {this.drawer && this.drawer.openLeftDrawer();}}>
           <Image style={{width:30,height:30,left:5}}
            source={require('./images/hamburger.png')} />
            </TouchableOpacity>

             <Text style={{ color: 'black',top:5,fontWeight: 'bold'}}>Profile </Text>

            <TouchableOpacity    underlayColor="#c33d19"
           onPress={() => {this.drawer && this.drawer.openRightDrawer();}}>
           <Image style={{width:30,height:30,right:5}}
            source={require('./images/hamburger.png')} />
            </TouchableOpacity>
            </View>


       <TabBar
    style={styles.bottomcontent}
    onItemSelected={(index) => {console.log(`current item's index is ${index}`);}}
    navTextColorSelected='#2196F3' >
    <TabBar.Item
        icon={require('./images/home.png')}
        selectedIcon={require('./images/home.png')}
        onPress={() => {
            // do sth
        }}
        /*badge={6}*/ //for round circle with number
        title='Home'>
        <View style={styles.text}>
            <Text style={{fontSize: 18}}>Home</Text>
        </View>
    </TabBar.Item>

    <TabBar.Item
        icon={require('./images/basket.png')}
        selectedIcon={require('./images/basket.png')}
        title='Delete'>
        <View style={styles.text}>
            <Text style={{fontSize: 18}}>Delete</Text>
        </View>
    </TabBar.Item>

    <TabBar.Item
        icon={require('./images/wishlist.png')}
        selectedIcon={require('./images/wishlist-color.png')}
        title='WishList'
 >
        <View style={styles.text}>
            <Text style={{fontSize: 18}}>WishList</Text>
        </View>
    </TabBar.Item>

    <TabBar.Item
        icon={require('./images/profle.png')}
        selectedIcon={require('./images/profle.png')}
        title='Profile'>

<View style={styles.bottomcontent}>
        <ScrollView>
        <View style={styles.profilecontainer}>

        <View style={styles.logo_layout}>
          <Image source={logoImg} style={styles.image} />
          <Text style={styles.profilename_txt}>Xelpmoc Design</Text>
        </View>

        <View style={styles.card_layout}>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>Name          :</Text>
        <Text style={styles.label_txt}>Shruti</Text>
        </View>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>MobileNumber  :</Text>
        <Text style={styles.label_txt}>8674745574</Text>
        </View>

        </View>

        <View style={styles.userCard_layout}>
        <Text style={styles.header_txt}>User Information</Text>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>User Name    :</Text>
        <Text style={styles.label_txt}>Shruti</Text>
        </View>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>MobileNumber :</Text>
        <Text style={styles.label_txt}>8674745574</Text>
        </View>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>Email        :</Text>
        <Text style={styles.label_txt}>shruti@xelpmoc.in</Text>
        </View>

        </View>

        <View style={styles.userCard_layout}>
        <Text style={styles.header_txt}>Company Information</Text>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>Name       :</Text>
        <Text style={styles.label_txt}>Shruti</Text>
        </View>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>Type         :</Text>
        <Text style={styles.label_txt}>abc</Text>
        </View>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>Email        :</Text>
        <Text style={styles.label_txt}>shruti@xelpmoc.in</Text>
        </View>

        </View>

        <View style={styles.userCard_layout}>
        <Text style={styles.header_txt}>Owner Information</Text>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>Name       :</Text>
        <Text style={styles.label_txt}>Shruti</Text>
        </View>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>MobileNumber :</Text>
        <Text style={styles.label_txt}>8674745574</Text>
        </View>

        <View style={styles.card_content}>
        <Text style={styles.label_txt}>Email        :</Text>
        <Text style={styles.label_txt}>shruti@xelpmoc.in</Text>
        </View>

        </View>


        <View >
          <ListView
          horizontal={true}
          dataSource={this.state.dataSource}
         renderRow={(rowData) => (
                  <TouchableOpacity
                  key={rowData.id}
                  style={styles.horizontl_card}
                  onPress={() => Alert.alert(rowData)}>

                  <View style={styles.list_background}>
                  <Text style={styles.listtext}>
                      {rowData}
                  </Text>
                  </View>

              </TouchableOpacity>
         )}
          
          />
        </View>
       


        </View>

          </ScrollView>

          
          </View>



        
    </TabBar.Item>
</TabBar>

        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  main: {
    position: 'absolute',
    backgroundColor: '#2ba'
  },
  head: {
    height: 56,
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
     borderBottomWidth: 0.5,
     borderBottomColor:'#e9e9e9',
    paddingTop:10
  },
  content: {
   	flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'#F0F0F0',
      flexDirection: 'column',
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'stretch',
    backgroundColor: '#2196F3'
  },
  leftBottom: {
    flex: 2,
    alignSelf: 'stretch',
    backgroundColor: '#f0f0f0'
  },
  leftDrawer: {
    borderRightWidth: 2,
    borderRightColor: '#5b585a'
  },
  rightDrawer: {
    borderLeftWidth: 2,
    borderLeftColor: '#5b585a'
  },
  btnText: {
    fontSize: 14,
    color: '#f0f0f0'
  },
   section: {
        flexDirection:'row',
        marginTop: 5,
        flexWrap: 'wrap',
        justifyContent:'flex-start',
        backgroundColor:'#e9e9e9',
        margin:10
    },
     inputWrapper: {
     margin:10,
    },
     label: {
        paddingRight: 16,
        top: 2,
        left:50,
    },
    inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
    },
  logo_layout:{
        width: 350,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        marginTop: 10,

      },
      image: {
        width: 80,
        height: 80,
        borderRadius:60,

      },
      profilename_txt:{
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 10,
        fontSize:20
      },
      card_layout:{
        flexDirection:'column',
        width: 350,
        height: 100,
        backgroundColor: 'white',
        padding:15,
        marginTop: 10,
      },
      card_content:{
          flexDirection:'row',
          justifyContent: 'space-between',
      },
        horizontl_card:{
          width:200,
          height:100,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#FFFFFF',
          marginRight:5,
          marginLeft:5,
          marginTop:10,
          marginBottom:10

        },
      userCard_layout:{
        flexDirection:'column',
        width: 350,
        height: 150,
        backgroundColor: 'white',
        padding:15,
        marginTop: 10,
      },
      label_txt:{
        color: 'black',
        fontSize:15,
        marginTop:10
      },
      header_txt:{
        color: 'black',
        fontSize:15,
        fontWeight :'bold'
      },
       bottomcontent: {
          flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
  
    }, 
      listtext: {
        alignItems: 'center',
        justifyContent: 'center',
  
    }, 
      profilecontainer: {
    	flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'#F0F0F0',
      flexDirection: 'column',
     
    	},
});
    export default MenuBarProfile;