

import {Header} from 'react-fullpage';
import HeaderBar from '../components/HeaderBar';

// 첫 화면
export default function HomePage(){
    return(
        <div>
        <Header>
            <HeaderBar/>
        </Header>
            <div>메인 화면</div>
        </div>
    );
}