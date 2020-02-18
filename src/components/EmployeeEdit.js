import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate ,employeeSave ,employeeDelete } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{

state ={ showModal:false };

    componentWillMount(){
        _.each(this.props.employee, ( value, prop) => {
            this.props.employeeUpdate({ prop, value});
        });
    }
    onButtonPress(){
        const {name,phone,shift }= this.props;
        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid});
    }

    onTextPress(){
        const { phone ,shift }= this.props;
        Communications.text(phone,`Your upcoming shift is on ${shift} `);
    }

    onaccept(){
        const { uid } =this.props.employee;
        this.props.employeeDelete({ uid });
    }
    ondecline(){
        this.setState({showModal:false});
    }

    render(){
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        save changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=> this.setState({ showModal : !this.state.showModal })} >
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm 
                visible={ this.state.showModal }
                onAccept={this.onaccept.bind(this)}
                onDecline={this.ondecline.bind(this)}
                >
                    Are You Sure You Want To Delete?
                </Confirm>

            </Card>
        )
    }
}

const mapStateToProps =(state) =>{
    const {name,phone,shift} =state.employeeForm;
    return { name,phone,shift};
}

export default connect( mapStateToProps,{ employeeUpdate, employeeSave, employeeDelete } )(EmployeeEdit);