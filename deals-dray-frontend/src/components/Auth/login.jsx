import "./Auth.css";

export const AuthLogin = () => {


    // const handleUserNameChange = (e) => {
    //     authDispatch({
    //         type: "USERNAME",
    //         payload: e.target.value
    //     });
    // };

    // const handlePasswordChange = (e) => {
    //     authDispatch({
    //         type: "PASSWORD",
    //         payload: e.target.value
    //     });
    // };

    // const handleLoginClick = (e) => {
    //     e.preventDefault();
    //     const token = loginHandler(username, password);
    //     if (token) {
    //         navigate("/");
    //     }
    //     authDispatch({
    //         type: "TOKEN",
    //         payload: token
    //     });
    //     authDispatch({
    //         type: "CLEAR_CREDENTIALS"
    //     });
    // };

    // const handleTestCredentialsClick = () => {
    //     const token = loginHandler("prakashsakari", "ps12345");
    //     authDispatch({
    //         type: "TOKEN",
    //         payload: token
    //     });
    //     if (token) {
    //         navigate("/");
    //     }
    // };

    console.log("error eroor error");
        return (
        <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>
                <form >
                    <div className="form-container">
                        <label className="form-label">Username</label>
                        <input className="form-input lh-ls" placeholder="prakashsakari"  />
                    </div>
                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input className="form-input lh-ls" placeholder="*******"  />
                    </div>
                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                    </div>
                </form>
                <div>
                    <button className="button login-btn btn-outline-primary btn-margin sign-up-btn">
                        Login with Test Credentials
                    </button>
                </div>
            </div>
        </div>
    )
}