import React from 'react';
import { Text,TouchableOpacity } from 'react-native';


const Button= ({onPress,children}) =>{
    const {buttonstyle,textbutton}=styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonstyle}>
            <Text style={textbutton}>
                {children}
            </Text>
            </TouchableOpacity>
        
    );
};

const styles ={
    textbutton:{
    alignSelf : 'center',
    color:'#007aff',
    fontSize:15,
    fontWeight:'500',
    paddingTop:10,
    paddingBottom:10

    },
    buttonstyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5

    }

};

export { Button };