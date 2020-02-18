import React, { Component } from 'react';

import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class SignUp extends Component {




    onEmailChange(text) {
        this.props.emailChanged(text);

    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPressReg() {
        const { email, password } = this.props;
        this.props.createUser({ email, password });

    }


    renderError() {
        if (this.props.error) {
            return (<View style={{ backgroundColor: 'white' }}>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </View>
            );
        }
    }


    renderButtonReg() {
        if (this.props.loading) {
            return <Spinner sizeprop="large" />;
        }
        return (
            <Button onPress={this.onButtonPressReg.bind(this)}>
                SignUp
            </Button>
        );
    }




    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholderprop="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntryprop
                        label="Password"
                        placeholderprop="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}



                <CardSection>
                    {this.renderButtonReg()}
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf: 'center',
        color: 'red'
    }
}


const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    createUser
})(SignUp);