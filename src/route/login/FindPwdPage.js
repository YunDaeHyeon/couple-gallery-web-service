import HeaderBar from "../../components/HeaderBar";
import '../../styled/FindPwdPage_style.css';
import FindPwdForm from "../../components/login/FindPwdForm";

function FindPwdPage(){
    return(
        <div className="findPwd-page-background-container">
            <header>
                <HeaderBar/>
            </header>
            <main>
                <FindPwdForm/>
            </main>
        </div>
    );
}

export default FindPwdPage;