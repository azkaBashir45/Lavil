import React ,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Button } from 'react-native-paper';
export default class Screen7 extends Component{
  render()
  {
    return(
        <View style={styles.container}>
          {/* //for text */}
         <View style={styles.textmargin}>
         {/* for text input */}
         <TextInput style={styles.textInputborder}
           placeholder="Last name and first name"
           >
           </TextInput>

           <TextInput style={[styles.textInputborder,{marginTop:16}]}
           placeholder="Email"
           >
           </TextInput>
            {/* for password */}
            <TextInput style={[styles.textInputborder,{marginTop:16}]}
             placeholder="Password"
             secureTextEntry="true">
            </TextInput>
            <Text style={{marginTop:6,fontSize:16,fontWeight:"Medium",fontFamily:"Helvetica Neue",color:"#CDCDCD"}}>Use at least 8 characters</Text>
            <Button style={{fontSize:16,marginTop:56}} mode="contained" onPress={() => console.log('Pressed')}>
              next
  </Button>
         </View>
        </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  textmargin:{
       marginTop:122,
       marginLeft:24,
       width:312,
       
       height:53
  },
  textstle:{
     
      fontSize:24,
      fontWeight:'bold',
      color:'#011638',
      LineSpacing:24,
      
  },
  textinputmargin:{
    marginTop:80,
       marginLeft:24,
       marginRight:24
     
  },
  textInputborder:{
    borderColor:'#CDCDCD',
    borderWidth:1,
    height:56,
    borderRadius:10,
    padding:10
  },
  textcolor:{
      color:"#0561F6"
  }
});
