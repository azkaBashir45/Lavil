import React ,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
export default class Screen5 extends Component{
  render()
  {
    return(
        <View style={styles.container}>
          {/* //for text */}
         <View style={styles.textmargin}>
           <Text style={styles.textstle}>Hi !!! happy to see you again</Text>
         </View>
         {/* for text input */}
         <View style={styles.textinputmargin}>
           <TextInput style={styles.textInputborder}
           placeholder="Email"
           >
           </TextInput>
            {/* for password */}
            <TextInput style={[styles.textInputborder,{marginTop:16}]}
             placeholder="Password"
             secureTextEntry="true">
            </TextInput>
            <Text style={{marginTop:8,fontSize:16,fontWeight:"Medium",fontFamily:"Helvetica Neue",color:"#0D21A1"}}>Forgot your password ?</Text>
            <View style={{marginTop:116}}>
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
       marginTop:180,
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
    marginTop:40,
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
