import '../styled/HeaderBar_style.css';
import axios from 'axios';
import { useAuth } from '../authentiaction/auth';

export default function HeaderBar(){

    const user = {id : 'army', pwd : 'daehyeon'};

    const onTestClick = async(e) => {
        console.log("클릭");
        const response = await axios.post(`https://couple-gallery-web-be.run.goorm.app/`, {user});
        if(response.data === 'failure'){
            alert('로그인 실패');
        }else if(response.data === 'error'){
            alert('서버 오류');
        }else if(response.data === 'success'){
            alert('데이터 전송 성공');
        }
    }

    return(
        <header className='header'>
            <div className="header-container">
                <h1><a href="#!">Co</a></h1>
                <ul className="header-leftbar">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Hot</a></li>
                    <li><a href="#!">Gallery</a></li>
                </ul>
                <ul className="header-rightbar">
                    <li><a href="#!" onClick={onTestClick}>Login</a></li>
                    <li><a href="#!">Search</a></li>
                    <li><a href="#!">Setting</a></li>
                </ul>
            </div>
        </header>
    );
}