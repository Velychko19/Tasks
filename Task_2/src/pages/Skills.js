import work3 from "./../img/Work/work3.jpg"
const Skills = () => {
    return ( 
    <section className="skills" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container bd-grid">          
        <div>
            <h2 className="skills__subtitle">Profesional Skills</h2>
            <p className="skills__text">Here is the level of my professional skills in various programming languages.</p>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxl-html5 skills__icon'></i>
                    <span className="skills__name">HTML5/СSS3</span>
                </div>
                <div className="skills__bar skills__html">

                </div>
                <div>
                    <span className="skills__percentage">75%</span>
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxl-css3 skills__icon'></i>
                    <span className="skills__name">TypeScript / NodeJS</span>
                </div>
                <div className="skills__bar skills__css">
                    
                </div>
                <div>
                    <span className="skills__percentage">65%</span>
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxl-javascript skills__icon' ></i>
                    <span className="skills__name">JAVA / JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__js">
                    
                </div>
                <div>
                    <span className="skills__percentage">70%</span>
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__names">
                    <i className='bx bxs-paint skills__icon'></i>
                    <span className="skills__name">C++/C#</span>
                </div>
                <div className="skills__bar skills__ux">
                    
                </div>
                <div>
                    <span className="skills__percentage">70%</span>
                </div>
            </div>
        </div>
        
        <div>              
            <img src={work3} alt="" className="skills__img"/>
        </div>
    </div>
</section> );
}
 
export default Skills;