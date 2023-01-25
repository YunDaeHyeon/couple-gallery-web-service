import LoginForm from "../components/logins/LoginForm";
import HeaderBar from "../components/HeaderBar";

function LoginPage(){
    return(
        <div>
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