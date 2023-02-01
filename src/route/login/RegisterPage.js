import RegisterForm from "../../components/login/RegisterForm";
import HeaderBar from "../../components/HeaderBar";
import '../../styled/RegisterPage_style.css';

function RegisterPage(){
    return(
        <div className="register-page-background-container">
            <header>
                <HeaderBar/>
            </header>
            <main>
                <RegisterForm/>
            </main>
        </div>
    );
}

export default RegisterPage;
