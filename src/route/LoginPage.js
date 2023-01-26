import LoginForm from "../components/logins/LoginForm";
import HeaderBar from "../components/HeaderBar";
import '../styled/LoginPage_style.css';

function LoginPage(){
    return(
        <div className="login-page-background-container">
            <header>
                <HeaderBar/>
            </header>
            <main>
                <LoginForm/>
            </main>
        </div>
    );
}

export default LoginPage;