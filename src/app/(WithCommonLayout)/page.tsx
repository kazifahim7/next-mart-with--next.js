
import Category from "@/components/modules/home/category";
import FeatureProducts from "@/components/modules/home/Feature";
import FlashSale from "@/components/modules/home/flashSell";
import HeroSection from "@/components/modules/home/HeroSection";
import TopBrands from "@/components/modules/home/TopBrands";




const HomePage = () => {




  return (
    <div className="container mx-auto">
      <HeroSection></HeroSection>
      <Category></Category>
      <FeatureProducts></FeatureProducts>
      <FlashSale></FlashSale>
      <TopBrands></TopBrands>
    </div>
  );
};

export default HomePage;