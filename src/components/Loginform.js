import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, reset } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Actions } from 'react-native-router-flux';

class Loginform extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);

    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });

    }

    onButtonPressReg(text) {
        this.props.reset(text);

        Actions.signUp();
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

    renderButton() {
        if (this.props.loading) {
            return <Spinner sizeprop="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
        </Button>
        );
    }


    renderButtonReg() {
        
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
                    {this.renderButton()}

                    {this.renderButtonReg()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
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
    loginUser,
    reset
})(Loginform);