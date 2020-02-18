import React from 'react';
import { Text , View ,Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './button';

const Confirm = ({children, visible , onAccept, onDecline }) => {


    const { containerstyle, textstyle, CardSectionstyle } =styles;


    return (
        <Modal
        animationType="slide"
        onRequestClose={()=>{}}
        transparent
        visible={visible}       
        >
            <View style={containerstyle} >
                <CardSection style={CardSectionstyle} >
                    <Text style={textstyle} >
                        {children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept} >Yes</Button>
                    <Button onPress={onDecline} >No</Button>
                </CardSection>
            </View>

        </Modal>
    )
}

const styles={
    CardSectionstyle:{
        justifyContent:'center'

    },
    textstyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40

    },
    containerstyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'

    }
}

export { Confirm};