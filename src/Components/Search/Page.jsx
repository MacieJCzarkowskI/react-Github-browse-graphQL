import * as React from "react";


export class PageComponent extends React.Component {
    click = () => {
        console.log(document.cookie)
    }
    render() {
        return (
            <div className="login-component">
                <button onClick={this.click}>Login</button>
            </div>

        )
    }

}

export default PageComponent;
