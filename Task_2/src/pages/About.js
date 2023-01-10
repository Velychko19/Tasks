import about from "./../img/about.jpg"
const About = () => {
    return (  <div className="about section " id="about">
    <h2 className="section-title">About</h2>

    <div className="about__container bd-grid">
        <div className="about__img">
            <img src={about} alt=""/>
        </div>
        
        <div>
            <h2 className="about__subtitle">I'am Dmytro</h2>
            <p className="about__text">I'am studying in the third year of the Cherkasy State University of Technology, majoring in "Software Engineering".Before that, I studied at the Tal'nivs'kyy Budivel'no-Ekonomichnyy Koledzh in the same major. I want to work in the field of IT.</p>           
        </div>                                   
    </div>
</div>);
}
 
export default About;