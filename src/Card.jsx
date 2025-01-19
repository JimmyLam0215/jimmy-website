import profilePic from './assets/Jimmy.jpg'
function Card(){
    return (
        <main>
        <div className='card'>
            <img className='card-image' alt='profile picture' src={profilePic}></img>
            <h1 className='card-title'>Lam Pui Wa, Jimmy</h1>
            <p>I am the normal one</p>
            <p className='copyright'>&copy; {new Date().getFullYear()} Jimmy Lam</p>
        </div> 
        </main>
    );
}

export default Card