import React, {Component} from "react";
import UserService from  "../../../repository/userRepository"
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            isLoggedIn: true

        }
    }
    componentDidMount(): void {
        this.loadUser();
    }

    loadUser() {
        UserService.login().then((data) => {
            console.log(data);

        })
    }
    render() {

         return (<div>
             Hello World
         </div>)

    }
};
export default Profile;