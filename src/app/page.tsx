"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Award, CheckCircle, Heart, MapPin, Shield, Sparkles, Star, Users, Zap } from 'lucide-react';

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
            { name: "Reviews", id: "reviews" },
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
          imageSrc="http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-while-sitting-bed-hotel-room_23-2149304033.jpg"
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
              id: "lash-extensions",              name: "Lash Extensions",              price: "From AED 350",              imageSrc: "http://img.b2bpic.net/free-photo/woman-with-eyelashes-extension-side-view_23-2149909207.jpg",              imageAlt: "Professional Lash Extensions Service"
            },
            {
              id: "japanese-nails",              name: "Japanese Gel Nails",              price: "From AED 280",              imageSrc: "http://img.b2bpic.net/free-photo/woman-hand-with-red-manicure-two-rings-fingers-beautiful-green-palm-leaf-tropical-gray-wall_343596-3253.jpg",              imageAlt: "Luxury Japanese Nail Art Service"
            },
            {
              id: "hand-care",              name: "Hand & Foot Care",              price: "From AED 200",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-manicurist-holding-nail-tool_23-2149171332.jpg",              imageAlt: "Premium Hand and Foot Treatment"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Why Ginza Beauty"
          description="We combine traditional Japanese craftsmanship with modern techniques to deliver exceptional results."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              title: "Authentic Japanese Techniques",              description: "Precision methods rooted in Japanese beauty traditions and hospitality philosophy.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Sparkles, label: "First in UAE", value: "Authentic" },
                { icon: Award, label: "Expert Artists", value: "Skilled" }
              ]
            },
            {
              title: "Premium Quality",              description: "High-end products and meticulous attention to detail in every service.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Shield, label: "Certified", value: "Professional" },
                { icon: CheckCircle, label: "Long-lasting", value: "Results" }
              ]
            },
            {
              title: "Calm & Serene",              description: "A peaceful sanctuary designed for relaxation and rejuvenation.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Zap, label: "Clean", value: "Immaculate" },
                { icon: Star, label: "Welcoming", value: "Omotenashi" }
              ]
            },
            {
              title: "Exceptional Hospitality",              description: "Personalized service rooted in Japanese 'Omotenashi' philosophy.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Heart, label: "Personal", value: "Attentive" },
                { icon: Sparkles, label: "Premium", value: "Experience" }
              ]
            },
            {
              title: "4.9 Google Rating",              description: "Trusted by 280+ happy clients across Dubai.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Star, label: "Highly Rated", value: "4.9★" },
                { icon: Users, label: "Happy Clients", value: "280+" }
              ]
            },
            {
              title: "Long-Lasting Results",              description: "Our techniques are designed for durability and natural beauty.",              bentoComponent: "icon-info-cards",              items: [
                { icon: CheckCircle, label: "Touch-ups", value: "Every 4w" },
                { icon: Zap, label: "Maintenance", value: "Simple" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Perfect nails and beautiful natural lashes. The attention to detail and professionalism is unmatched. The serene atmosphere makes every visit special."
          rating={5}
          author="Sarah Johnson"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/front-view-business-woman-suit_23-2148603018.jpg", alt: "Sarah Johnson" },
            { src: "http://img.b2bpic.net/free-photo/cute-hipster-woman-taking-photos-retro-camera_176420-16727.jpg", alt: "Fatima Al Mansouri" },
            { src: "http://img.b2bpic.net/free-photo/thoughtful-business-woman-standing-with-crossed-arms_23-2148095675.jpg", alt: "Aisha Ahmed" },
            { src: "http://img.b2bpic.net/free-photo/young-blonde-woman-smiling-city_839833-7650.jpg", alt: "Hana Martinez" },
            { src: "http://img.b2bpic.net/free-photo/high-angle-modern-woman-talking-phone_23-2148415865.jpg", alt: "Emma Wilson" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
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
          imageSrc="http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-while-sitting-bed-hotel-room_23-2149304033.jpg"
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
              id: "faq-5",              title: "Is the salon clean and hygienic?",              content: "Absolutely. We follow strict international hygiene standards. All tools are sterilized, and we maintain a pristine, serene environment for your safety and comfort."
            },
            {
              id: "faq-6",              title: "Do you offer custom color matching?",              content: "Yes! We work with you to find the perfect shades and designs that match your skin tone and style preferences. Personalization is at the heart of our service."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Visit Us Today"
          description="Unit 12, First Floor, Al Barsha Mall | 23rd Street, Al Barsha 2, Dubai | Beside Al Barsha Pond Park\n\nPhone: +971 4 340 7171\nWhatsApp: Available\n\nSun–Thu: 10:15 AM – 7:00 PM\nFri–Sat: 12:15 PM – 9:00 PM"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Book Appointment"
          termsText="By booking with us, you agree to our terms and confirm your appointment details will be used to contact you."
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
                { label: "About Us", href: "#about" },
                { label: "Why Ginza Beauty", href: "#features" },
                { label: "Reviews", href: "#testimonials" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
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