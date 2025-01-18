function Skills(){
    return (
        <>
        <div className="programming-language" id="programming-language">
                <h3>Skills:</h3>
                <h3>Programming Languages/Scripting Languages:</h3>
                <table className="skills">
                    <tr>
                        <td><div class="bar front high" data-skill="Python"></div></td>
                        <td><div class="bar front high" data-skill="JavaScript"></div></td>
                    </tr>
                    <tr>
                        <td><div class="bar front high" data-skill="HTML5"></div></td>
                        <td><div class="bar front high" data-skill="SQL"></div></td>
                    </tr>
                    <tr>
                        <td><div class="bar front intermediate" data-skill="X++"></div></td>
                        <td><div class="bar front intermediate" data-skill="C#"></div></td>
                    </tr>
                    <tr>
                        <td><div class="bar front intermediate" data-skill="Java"></div></td>
                        <td><div class="bar front basic" data-skill="C++"></div></td>
                    </tr>
                    <tr>
                    <td><div class="bar front basic" data-skill="C"></div></td>
                        <td><div class="bar front basic" data-skill="R"></div></td>
                    </tr>
                    <tr>
                    <td><div class="bar front basic" data-skill="PHP"></div></td>
                    </tr>
                </table>
                <div className="divider"></div>
                <h3>Frameworks/ Libraries/ Game Engine/ ERP:</h3>
                <table className="skills">
                    <tr>
                        <td><div class="bar front high" data-skill="Flask"></div></td>
                        <td><div class="bar front high" data-skill="React"></div></td>
                    </tr>
                    <tr>
                        <td><div class="bar front intermediate" data-skill="Unity"></div></td>
                        <td><div class="bar front intermediate" data-skill="Microsoft AX 2012"></div></td>
                    </tr>
                    <tr>
                        <td><div class="bar front basic" data-skill="Django"></div></td>
                    </tr>
                </table>
                <div className="divider"></div>
                <h3>Tools:</h3>
                <table className="skills">
                    <tr>
                        <td className="tools">🪏 Figma, n8n, Git, MySQL, Docker, Jupyter Notebook</td>
                    </tr>
                </table>
                <div className="divider"></div>
            </div>    
        </>
    )
}

export default Skills