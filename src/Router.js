import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Loginform from './components/Loginform';
import SignUp from './components/SignUp';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
    return (



        <Router >

            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={Loginform} title="please login" />
                    <Scene key="signUp" component={SignUp} title="Please SignUp" />
                </Scene>


                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="List of employee"
                        rightTitle="Logout"
                        leftTitle="Add+"
                        onRight={()=>Actions.auth()}
                        onLeft={() => Actions.employeeCreate()}
                        initial
                    />
                    
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                    <Scene key='employeeEdit' component={EmployeeEdit} title="Edit" />
                </Scene>

            </Scene>
        </Router>
    );


};

export default RouterComponent;