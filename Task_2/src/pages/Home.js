import work1 from "./../img/Work/work1.jpg";
import work2 from  "./../img/Work/work2.jpg";
import work3 from "./../img/Work/work3.jpg";
import work4 from "./../img/Work/work4.jpg";
import work5 from "./../img/Work/work5.jpg";
import work6 from "./../img/Work/work6.jpg";
import perfil from "./../img/home1.png";
import { NavLink } from "react-router-dom";
const Home = () => {
    return ( 
    
        <main class="l-main">
        <section class="home bd-grid" id="home">
            <div class="home__data">
                <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Dmytro</span><br/> Web Designer</h1>

                        <NavLink to="/contacts" className="button">Contacts</NavLink>
                    
            </div>

            <div class="home__social">
                <a href="" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                <a href="" class="home__social-icon"><i class='bx bxl-behance' ></i></a>
                <a href="" class="home__social-icon"><i class='bx bxl-github' ></i></a>
            </div>

            <div className="home__img">
                 <a href="" className="work__img">
                 <img src={perfil} alt=""/>
             </a>
            
       </div>
        </section>

        <section class="work section" id="work">
            <h2 class="section-title">Work</h2>

            <div class="work__container bd-grid">
                <a href="" class="work__img">
                    <img src={work1} alt=""/>
                </a>
                <a href="" class="work__img">
                    <img src={work2} alt=""/>
                </a>
                <a href="" class="work__img">
                    <img src={work3} alt=""/>
                </a>
                <a href="" class="work__img">
                    <img src={work4} alt=""/>
                </a>
                <a href="" class="work__img">
                    <img src={work5} alt=""/>
                </a>
                <a href="" class="work__img">
                    <img src={work6} alt=""/>
                </a>
            </div>
        </section> 
        </main>);
}
 
export default Home;