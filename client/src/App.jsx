import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home';
import MenuPage from './pages/MenuPage/MenuPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import ContactUs from './pages/Contact/ContactUs';
import Footer from './components/Footer/Footer';
import FoodItemDetails from './pages/FoodItemDetails';
import FAQpage from './pages/FAQ/FAQpage';
import ScrollToTop from './components/Others/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import Payment from './pages/Payment';
import SplashScreen from './pages/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(splashTimer);
  }, []);
  return (
    <BrowserRouter>
    {showSplash && <SplashScreen />}
    <ScrollToTop />
       <Navbar/>

       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path="/menu" element={<MenuPage />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/faq" element={<FAQpage />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
         <Route path="/terms-conditions" element={<TermsConditions/>} />
         <Route path="/payment" element={<Payment />} />
         
         <Route path="/menu/:category/:slug" element={<FoodItemDetails />} />
       </Routes>

       <Footer />
    </BrowserRouter>
  )
}

export default App;