import React from 'react';
import Drawer from '../components/ui/Drawer';
import StartLogin from '../components/ui/login/startLogin';

const Login = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <StartLogin/>
                </div>
            </div>
        </div>
    );
};

export default Login;