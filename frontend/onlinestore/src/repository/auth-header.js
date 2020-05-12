export default function authHeader() {
    debugger;
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}