import { Header } from './Header';
import { Hero } from './HeroSection';
import { About } from './QuemSomos';
import { Training } from './TreinoSection';
import { Course } from './Cursos';
import { Testimonials } from './Depoimentos';
import { Gallery } from './Gallery';
import { Question } from './Questions';
import { Banner } from './Banner';
import { Footer } from './Footer';
export function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Training />
            <Course />
            <Testimonials />
            <Gallery />
            <Question />
            <Banner />
            <Footer />
        </div>
    )

}