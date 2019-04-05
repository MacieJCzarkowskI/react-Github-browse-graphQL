import * as React from "react";
import Auth from './Auth.js';

import "./scss/index.scss";
const auth = new Auth();

export class LoginComponent extends React.Component {
    render() {
        return (
            <div className="login-component">
                {/*<div className="login-page">*/}
                {/*    <div className="form">*/}
                {/*        Login to GitHub*/}
                {/*        <form className="login-form">*/}
                {/*            <p className="message">error message</p>*/}
                {/*            <p className="err_message">Error Login pattern</p>*/}
                {/*            <input type="text" placeholder="login@login.com"/>*/}
                {/*            <p className="err_message">Error Password pattern</p>*/}
                {/*            <input type="password" placeholder="**********"/>*/}
                {/*            <div className="button">login</div>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <button onClick={()=>{auth.login()}}>Login</button>
            </div>

        )
    }

}

export default LoginComponent;
