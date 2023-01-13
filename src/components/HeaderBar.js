import '../styled/HeaderBar_style.css';

export default function HeaderBar(){
    return(
        <header>
            <div class="header-container">
            <h1><a href="#!">Co</a></h1>
            <ul class="header-leftbar">
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Hot</a></li>
                <li><a href="#!">Gallery</a></li>
            </ul>
            <ul class="header-rightbar">
                <li><a href="#!">Login</a></li>
                <li><a href="#!">Search</a></li>
                <li><a href="#!">Setting</a></li>
            </ul>
            </div>
        </header>
    );
}