import React, {useContext} from 'react';
import {Modal} from "react-bootstrap";
import GoogleLogin from "react-google-login";
import {Context} from "../../utils/context";
import {apiService} from "../../App";


const Auth = (props) => {
    const authentificateGoogle = async (googleResponse, setContext, onHide) => {
        let body = JSON.stringify({
            origin: 'google',
            data: {token: googleResponse.tokenId, id: googleResponse.profileObj.googleId}
        });
        const res = await apiService.post('/api/login', body);
        let respose = await res.json();
        localStorage.setItem("auth", JSON.stringify(respose));
        setContext(respose);
        onHide();
    }
    const responseGoogle = (response) => {
        console.log(response);
    }

    const [context, setContext] = useContext(Context);
    return (
        <Modal
            {...props}
            centered
        >
            <GoogleLogin
                clientId="1015921157133-fb5hrl8prho084g93bj0jtj4qa9mdals.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={googleResponse => authentificateGoogle(googleResponse, setContext, props.onHide)}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Modal>
    );
};

export default Auth;