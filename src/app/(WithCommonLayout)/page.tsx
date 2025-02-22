
import Category from "@/components/modules/home/category";
import FeatureProducts from "@/components/modules/home/Feature";
import HeroSection from "@/components/modules/home/HeroSection";




const HomePage = () => {




  return (
    <div className="container mx-auto">
      <HeroSection></HeroSection>
      <Category></Category>
      <FeatureProducts></FeatureProducts>
    </div>
  );
};

export default HomePage;