

import {Header} from 'react-fullpage';
import HeaderBar from '../components/HeaderBar';
import Introduce from '../components/Introduce';
import '../styled/FirstPage_style.css';

// 첫 화면
export default function FirstPage(){
    return(
        <div>
        <Header>
            <HeaderBar/>
        </Header>
            <Introduce/>
        </div>
    );
}