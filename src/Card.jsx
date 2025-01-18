import profilePic from './assets/Jimmy.jpg'
function Card(){
    return (
        <div className='card'>
            <img className='card-image' alt='profile picture' src={profilePic}></img>
            <h2 className='card-title'>Jimmy Lam</h2>
            <p>I am the normal one</p>
            <p className='copyright'>&copy; {new Date().getFullYear()} Jimmy Lam</p>
        </div> 
    );
}

export default Card