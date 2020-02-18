import React from 'react';
import { View,ActivityIndicator } from'react-native';

const Spinner =({sizeprop}) =>{
    return (
        <View style={styles.spinnerstyle}> 
            <ActivityIndicator size={sizeprop||'large'} />
        </View>
    );
};

const styles={
    spinnerstyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
};

export { Spinner };
