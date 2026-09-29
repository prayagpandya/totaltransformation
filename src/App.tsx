import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Method } from './pages/Method';
import { CoachingDetail } from './pages/CoachingDetail';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';
import { Journey } from './pages/Journey';
import { Assessment } from './pages/Assessment';
import { Founders } from './pages/Founders';
import { Testimonials } from './pages/Testimonials';
import { Resources } from './pages/Resources';
import { Article } from './pages/Article';
import { FAQs } from './pages/FAQs';
import { Contact } from './pages/Contact';
import { MemberLogin } from './pages/MemberLogin';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/method" element={<Method />} />
            <Route path="/coaching/:slug" element={<CoachingDetail />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<Article />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/member-login" element={<MemberLogin />} />
            <Route path="/legal/:slug" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>);

}