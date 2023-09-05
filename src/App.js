
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
import SectionSix from './Components/SectionSix/SectionSix';
import FivthSection from './Components/FivthSection/FivthSection';
import FourthSection from './Components/FourthSection/FourthSection';
import ThirdSection from './Components/ThirdSection/ThirdSection';
import SecondSection from './Components/SecondSection/SecondSection';
import FirstSection from './Components/FirstSection/FirstSection';
import AlertSection from './Components/AlertSection/AlertSection';

function App() {
  return (
    <div className="App">
      <Header />
     <AlertSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FivthSection/>
      <SectionSix/>
      <Footer />
     
    </div>
  );
}

export default App;
