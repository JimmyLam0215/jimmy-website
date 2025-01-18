
function Home(){
    return (
        <>
            <div className="home">            
                <section className="intro-p">
                    <h3 id="home">About Me:</h3>
                    <p className="intro">
                        Hi there. My name is <strong>LAM Pui Wa</strong>. You can call me <strong>Jimmy</strong>. Welcome to my website. <br />
                    </p>
                    <p className="intro"> 
                        I am currently a year 4 student majoring in Computing from the <a href="https://www.polyu.edu.hk/en/comp/" target="_blank">Hong Kong Polytechnic University</a>. <br /> 
                    </p>
                    <p className="intro">   
                        This website will show some basic information about me!
                    </p>
                </section>
                <div className="divider"></div>
                <section className="education">
                <div className="table-container">
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th><h3>Interests:</h3></th>
                                    <th><h3>Education:</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="interest">⭐ Computer Science 💻</td>
                                    <td className="study">🎓 Bachelor of Science (Hons) Computing, 09/2021 - 08/2025</td>
                                </tr>
                                <tr>
                                    <td className="interest">⭐ Artificial Intelligence 🤖</td>
                                    <td className="school">The Hong Kong Polytechnic University</td>
                                </tr>
                                <tr>
                                    <td className="interest">⭐ Web development 🌐</td>
                                    <td className="study">🎓 Secondary School Education, 09/2015 - 08/2021</td>
                                </tr>
                                <tr>
                                    <td className="interest">⭐ Football ⚽︎</td>
                                    <td className="school">SKH Lam Kau Mow Secondary School</td>
                                </tr>
                                <tr>
                                    <td className="interest">⭐ Badminton 🏸</td>
                                    <td></td> 
                                </tr>
                                <tr>
                                    <td className="interest">⭐ Gaming 🕹️</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="divider"></div>
                </section>
            </div>
            
        </>
    );
}

export default Home