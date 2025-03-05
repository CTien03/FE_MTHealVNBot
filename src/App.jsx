import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatbotInterface from './chatbot';
import FAQSection from './FAQs';
import FeedbackForm from './feedback';
import ChatbotLanding from './home';
import Header from './menu';
import LoginRegistrationPage from './Login_and_Registration';
import HealthTracking from './HealthTracking';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginRegistrationPage/>} />
        <Route path="/home" element={<ChatbotLanding/>}/>
        <Route path="/chat" element={<ChatbotInterface />} />
        <Route path='/healthTracking' element={<HealthTracking/>} />
        <Route path="/faqs" element={<FAQSection />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
