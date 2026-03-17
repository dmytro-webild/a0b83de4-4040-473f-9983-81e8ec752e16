"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { MapPin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Ginza Beauty"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Location", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Book Appointment", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Ginza Beauty"
          description="Precision. Care. Omotenashi. Experience authentic Japanese beauty techniques and hospitality in the heart of Dubai. A calm retreat where every detail is designed for perfection."
          buttons={[
            { text: "Book Appointment", href: "#contact" },
            { text: "WhatsApp", href: "https://wa.me/971434071171" }
          ]}
          background={{ variant: "plain" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AT21DDEbCUKElwIvjwYyyd5jJX/uploaded-1773736258820-723nbl00.jpg"
          imageAlt="Ginza Beauty Luxury Japanese Salon Interior"
          mediaAnimation="blur-reveal"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Japanese Beauty, Redefined" }
          ]}
          useInvertedBackground={true}
          buttons={[
            { text: "Learn More", href: "#services" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardOne
          title="Our Premium Services"
          description="Authentic Japanese techniques delivered with meticulous precision and premium products. Every service is designed to enhance natural beauty and provide lasting results."
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "lash-extensions",              name: "Lash Extensions",              price: "From AED 350",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AT21DDEbCUKElwIvjwYyyd5jJX/uploaded-1773736332501-hn800tex.jpg",              imageAlt: "Professional Lash Extensions Service"
            },
            {
              id: "japanese-nails",              name: "Japanese Gel Nails",              price: "From AED 280",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AT21DDEbCUKElwIvjwYyyd5jJX/uploaded-1773736299774-xy8c7i1t.jpg",              imageAlt: "Luxury Japanese Nail Art Service"
            },
            {
              id: "hand-care",              name: "Pedicure",              price: "From AED 200",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AT21DDEbCUKElwIvjwYyyd5jJX/uploaded-1773736373401-zowypo31.jpg",              imageAlt: "Premium Hand and Foot Treatment"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Learn more about our services, care tips, and what to expect during your visit."
          textboxLayout="default"
          useInvertedBackground={true}
          mediaAnimation="blur-reveal"
          faqsAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AT21DDEbCUKElwIvjwYyyd5jJX/uploaded-1773736440356-3ts9tf95.jpg"
          imageAlt="Ginza Beauty Salon FAQ"
          mediaPosition="left"
          faqs={[
            {
              id: "faq-1",              title: "Can I wear makeup after lash extensions?",              content: "Yes, but we recommend waiting at least 24 hours. Use only makeup remover that is oil-free, as oils can weaken the adhesive. Our staff will provide detailed aftercare instructions."
            },
            {
              id: "faq-2",              title: "Will lash treatments damage my natural lashes?",              content: "No. When applied by trained professionals using premium products and proper techniques, lash extensions are completely safe. We prioritize lash health and use only the finest materials."
            },
            {
              id: "faq-3",              title: "How often should I schedule touch-ups?",              content: "We recommend touch-ups every 2–4 weeks, depending on your natural lash cycle. Regular maintenance keeps your lashes looking full and beautiful."
            },
            {
              id: "faq-4",              title: "What makes Japanese nails different?",              content: "Japanese nail art emphasizes precision, minimalism, and natural beauty. Our artists use advanced techniques to create intricate designs with impeccable attention to detail."
            },
            {
              id: "faq-6",              title: "Do you offer custom color matching?",              content: "Yes! We work with you to find the perfect shades and designs that match your skin tone and style preferences. Personalization is at the heart of our service."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Al Barsha"
          title="Location"
          description="Address: Unit 12, First Floor, Al Barsha Mall, 23rd Street, Al Barsha 2, Dubai
Open: 9AM - 
"
          mediaPosition="left"
          mediaAnimation="blur-reveal"
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AT21DDEbCUKElwIvjwYyyd5jJX/uploaded-1773736458342-7tiww9rq.jpg"
          imageAlt="Ginza Beauty Salon Location"
          background={{ variant: "plain" }}
          tagIcon={MapPin}
          tagAnimation="slide-up"
          buttonText="Get In Touch"
          inputPlaceholder="Enter your email"
          onSubmit={() => {}}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Ginza Beauty"
          columns={[
            {
              title: "Services",              items: [
                { label: "Lash Extensions", href: "#services" },
                { label: "Japanese Nails", href: "#services" },
                { label: "Hand & Foot Care", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Location", href: "#contact" },
                { label: "Aftercare Guide", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com/ginzabeautydubai" },
                { label: "WhatsApp", href: "https://wa.me/971434071171" },
                { label: "Google Maps", href: "https://maps.google.com" }
              ]
            }
          ]}
          copyrightText="© 2025 Ginza Beauty Dubai. Japanese Beauty Salon in UAE. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}