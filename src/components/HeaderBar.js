import '../styled/HeaderBar_style.css';
import {
    Link,
    useNavigate
  } from 'react-router-dom';
import { useAuth } from '../authentiaction/auth';

export default function HeaderBar(){
    const auth = useAuth();
    const session = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate(); // 사용자 위치 파악

    // 타이틀 로고, 홈 버튼 클릭 이벤트
    const onIntroButtonClick = (e) => {
        e.preventDefault();
        navigate('/');
    };

    // Home 버튼 클릭 이벤트
    const onHomeButtonClick = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    // 로그아웃 버튼 클릭 이벤트
    const onLogoutButtonClick = (e) => {
        alert('로그아웃하였습니다.');
        sessionStorage.removeItem('user'); // 사용자 session 제거
        auth.logout(); // 사용자 state 제거
        navigate('/login');
    }

    return(
        <header className='header'>
            <div className="header-container">
                <h1><a href="#!" onClick={onIntroButtonClick}>Co</a></h1>
                <ul className="header-leftbar">
                    <li><a href="#!" onClick={onHomeButtonClick}>Home</a></li>
                    <li><a href="#!">Hot</a></li>
                    <li><a href="#!">Gallery</a></li>
                </ul>
                <ul className="header-rightbar">
                    {   // 사용자 정보가 존재하지 않으면 로그인 버튼 출력
                        Object.keys(auth.user).length === 0 && !session ? ( 
                            <li>
                                <Link to='/login'>
                                    <a href="#!">Login</a>
                                </Link>
                            </li>
                        ) : Object.keys(auth.user).length !== 0 && !session ? (
                            <li>
                                <Link to='/login'>
                                    <a href="#!">Login</a>
                                </Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <p className='header-rightbar-username'>{session[0].user_name}님 환영합니다.</p>
                                </li>
                                <li>
                                    <a href="#!" onClick={onLogoutButtonClick}>Logout</a>
                                </li>
                            </>
                        )
                    }
                    <li><a href="#!">Search</a></li>
                    <li><a href="#!">Setting</a></li>
                </ul>
            </div>
        </header>
    );
}