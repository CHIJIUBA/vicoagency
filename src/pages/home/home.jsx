import Header from "../../includes/header";
import Footer from "../../includes/footer";
import SliderSection from "./slidersection";
import BrandSection from "./brandsection";
import AboutSection from "./aboutsection";
import FeatureSection from "./featuresection";
import PricingSection from "./pricingsection";
import ProjectUsSection from "./projectussection";
import WantToWork from "./wanttoworksection";


const Home = () => {

    return (
        <>
            <Header />
            <SliderSection />
            <BrandSection />
            <AboutSection />
            <FeatureSection />
            <ProjectUsSection />
            <PricingSection />
            <WantToWork />
            <Footer />
        </>
    );
}

export default Home;