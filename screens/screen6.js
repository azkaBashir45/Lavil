import React ,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
export default class Screen6 extends Component{
  render()
  {
    return(
        <View style={styles.container}>
          {/* //for text */}
         <View style={styles.textmargin}>
           <Text style={styles.textstle}>We are delighted that you are joining us, let's get started</Text>
         </View>
         {/* for text input */}
         <View style={styles.textinputmargin}>
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
            <View style={{marginTop:58}}>
            <Text>By continuing, you agree to lavil's terms and conditions and privacy policy</Text>
            </View>
           
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
