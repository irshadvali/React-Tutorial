import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },

     Textstyle: {
        color: 'black',
        fontSize: 20,

    },
    text: {
        color: '#4f603c',
        fontSize: 15,
    },
    list_item: {
        padding: 15,
        height: 50,
        marginBottom: 10,
        backgroundColor: '#FFFFFF'
    },
    listmain: {
        flex: 1,
        height: 70,
        flexDirection: 'row',
    },
    partone: {
        flex: .25,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    parttwo: {
        flex: .737,
        backgroundColor: '#FFFFFF',
         justifyContent: 'center',
         paddingLeft:10,
         fontWeight: 'bold' 
    },
    partthree: {
        flex: .003,
        backgroundColor: '#e6e6e6'
    },
    texcolorbold:{
     color:'#333'
    },
    buttondtyle: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',

  },
  scvwcontainer: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column',
  },
buttontwo: {
    padding: 20,
    color: '#d00000',
    textAlign: 'center',

  },

    gcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 3,

    },
    gtext: {
        color: '#4f603c',
        textAlign: 'left',
    },
    glinearGradient: {
        height: 150,
        borderRadius: 2,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },

    gcard_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    guserCard_layout: {
        flexDirection: 'column',
        width: 350,
        height: 150,
        padding: 15,
    },
    glabel_txt: {
        color: 'white',
        fontSize: 15,
        marginTop: 10
    },
    gheader_txt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    gscvwcontainer: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'column',
    },




  });
  export default styles;