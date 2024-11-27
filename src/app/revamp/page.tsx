import { AnimatedBackground } from "./components/animated-background"
import { BlogPostCard } from "./components/blog-post-card"
import { ContactForm } from "./components/contact-form"
import { CountrySelection } from "./components/country-selection"
import { FeaturesSection } from "./components/features-section"
import { Footer } from "./components/footer"
import { HeroSection } from "./components/hero-section"
import { SiteHeader } from "./components/site-header"
import { StatsSection } from "./components/stats-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { VisaServices } from "./components/visa-services"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <SiteHeader />
      <main className="min-h-screen bg-gray-50">
        <HeroSection />
        <CountrySelection />
        <FeaturesSection />
        <VisaServices />
        <StatsSection />
        <div className="container mx-auto px-4 py-16">
          <ContactForm />
          <TestimonialsSection />
          <section className="py-16">
            <div className="text-center mb-12">
              <div className="text-green-600 font-medium mb-2">NEWS & BLOG</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Read Our Latest News & Blog
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <BlogPostCard
                date="31"
                month="Aug"
                category="Consulting"
                title="The Human Rights and Study Visa Programs"
                excerpt="These case are perfectly simple easy to distinguish free ho take trivial example undertakes"
                image="/placeholder.svg?height=240&width=400"
                comments={0}
              />
              <BlogPostCard
                date="31"
                month="Aug"
                category="Immigration"
                title="Reasons for Australian Student Visa Refusal"
                excerpt="These case are perfectly simple easy to distinguish free ho take trivial example undertakes"
                image="/placeholder.svg?height=240&width=400"
                comments={0}
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

