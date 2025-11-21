'use client'

import { useState } from 'react'
import { supabase } from './lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }])

      if (error) throw error

      setMessage("Success! You are on the waitlist. We will notify you at launch.")
      setEmail('')
    } catch (error: any) {
      if (error.code === '23505') {
        setMessage("You are already on the waitlist!")
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Launch Banner */}
      <div className="bg-[#2D2D2D] text-white text-center py-2 text-sm font-asfalit">
        ✨ LAUNCHING SPRING 2026
      </div>

      {/* Header */}
      <header className="container mx-auto px-9 py-3">
        <img src="/images/logo.png" alt="Probya" className="h-12" />
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-background.jpg" 
            alt="Woman in seated position with probya bottle in front" 
            className="w-full h-full object-cover object-[right_30%]"
          />
          <div className="absolute inset-0 bg-black/8"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl text-left ml-0 md:ml-12">
            {/* Headline Outside Box */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-mazier font-normal text-white drop-shadow-lg mb-3">
                Feminine Wellness, Redefined.
              </h1>
              <p className="text-lg font-asfalit text-white drop-shadow-md">
                Intimate Care Designed With Your Microbiome in Mind
              </p>
            </div>

            {/* White Box with Waitlist Form Only */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-mazier font-semibold text-[#2D2D2D] mb-3">
                Join our Waitlist! ✨
              </h2>
              <p className="text-[#5D5D5D] font-asfalit mb-4 text-sm">
                Be the first to experience science-backed feminine wellness products.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A77C] text-[#2D2D2D] font-asfalit"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#2D2D2D] text-white px-8 py-3 rounded-lg font-asfalit font-semibold hover:bg-[#1D1D1D] transition disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </form>

              {message && (
                <div className="mt-4 p-3 bg-white rounded-lg text-[#2D2D2D] border border-[#C9A77C] text-sm font-asfalit">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What is Probya Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-mazier font-bold text-[#2D2D2D] mb-6">
            What is Probya?
          </h2>
          <p className="text-lg font-asfalit text-[#5D5D5D] leading-relaxed">
            Probya is a women's health and wellness company revolutionizing intimate care. 
            We create science-backed feminine care products specifically formulated to 
            support your vaginal microbiome—not disrupt it. Because your body deserves better 
            than harsh, pH-imbalanced products.
          </p>
        </div>
      </section>

      {/* The Problem Section - With Icons */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-mazier font-bold text-[#2D2D2D] mb-4 text-center">
              The Problem with Traditional Intimate Care
            </h2>
            <p className="text-center font-asfalit text-[#5D5D5D] text-lg mb-12 max-w-3xl mx-auto">
              Most intimate care products disrupt your body's natural balance, leading to discomfort and infections
            </p>

            {/* Problem Cards Grid - Centered Icons */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Card 1 - High pH */}
              <div className="bg-[#F5F1ED] rounded-2xl p-6 hover:shadow-lg transition text-center">
                <div className="text-5xl mb-4">⚗️</div>
                <h3 className="font-mazier font-semibold text-xl text-[#2D2D2D] mb-3">
                  High pH Levels
                </h3>
                <p className="text-[#5D5D5D] font-asfalit text-sm leading-relaxed">
                  Traditional soaps have a pH of 9-11, far above your body's natural range of 3.8-4.5, disrupting your protective bacteria
                </p>
              </div>

              {/* Card 2 - Harsh Sulfates */}
              <div className="bg-[#F5F1ED] rounded-2xl p-6 hover:shadow-lg transition text-center">
                <div className="text-5xl mb-4">🧪</div>
                <h3 className="font-mazier font-semibold text-xl text-[#2D2D2D] mb-3">
                  Harsh Sulfates
                </h3>
                <p className="text-[#5D5D5D] font-asfalit text-sm leading-relaxed">
                  Aggressive surfactants strip away beneficial Lactobacillus bacteria that keep you healthy and balanced
                </p>
              </div>

              {/* Card 3 - Synthetic Fragrances */}
              <div className="bg-[#F5F1ED] rounded-2xl p-6 hover:shadow-lg transition text-center">
                <div className="text-5xl mb-4">🌸</div>
                <h3 className="font-mazier font-semibold text-xl text-[#2D2D2D] mb-3">
                  Synthetic Fragrances
                </h3>
                <p className="text-[#5D5D5D] font-asfalit text-sm leading-relaxed">
                  Artificial scents contain chemicals that irritate sensitive skin and can trigger allergic reactions
                </p>
              </div>

              {/* Card 4 - One Size Fits All */}
              <div className="bg-[#F5F1ED] rounded-2xl p-6 hover:shadow-lg transition text-center">
                <div className="text-5xl mb-4">❌</div>
                <h3 className="font-mazier font-semibold text-xl text-[#2D2D2D] mb-3">
                  One-Size-Fits-All
                </h3>
                <p className="text-[#5D5D5D] font-asfalit text-sm leading-relaxed">
                  Generic formulas ignore your unique microbiome and body chemistry, leading to recurring issues
                </p>
              </div>
            </div>

        

            {/* Featured Statistic with Image */}
            <div className="bg-gradient-to-br from-[#E8DCC8] to-[#F8F5F1] rounded-3xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-0 items-center">
                {/* Left side - Image */}
                <div className="relative h-full min-h-[500px]">
                  <img 
                    src="/images/bv-awareness.jpeg" 
                    alt="Woman contemplating by the water" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right side - Statistics */}
                <div className="p-8 md:p-12">
                  
                  <h3 className="font-mazier font-semibold text-2xl text-[#2D2D2D] mb-6">
                    The Reality of BV
                  </h3>
                  
                  {/* Stats */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-5xl font-bold text-[#C9A77C] mb-2">20-30%</p>
                      <p className="text-[#5D5D5D] font-asfalit">
                        of women of reproductive age attending STI clinics suffer from bacterial vaginosis
                      </p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold text-[#C9A77C] mb-2">50-60%</p>
                      <p className="text-[#5D5D5D] font-asfalit">
                        prevalence in high-risk populations
                      </p>
                    </div>
                  </div>

                  {/* Source */}
                  <div className="pt-6 border-t border-[#C9A77C]/30">
                    <p className="text-xs font-asfalit text-[#5D5D5D] italic">
                      Source: World Health Organization - Bacterial Vaginosis Global Prevalence Studies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


     {/* The Solution Section - With Border and Lighter Cards */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          {/* Border wrapper */}
          <div className="max-w-7xl mx-auto border-4 border-[#2D2D2D] rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-mazier font-bold text-center mb-16 text-[#2D2D2D]">
              The Probya Difference
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left side - 3 elegant cards with lighter backgrounds */}
              <div className="space-y-4">
                {/* Science-Backed Formula */}
                <div className="bg-[#F5F1ED] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl">🔬</div>
                    <div>
                      <h3 className="font-mazier font-semibold text-2xl mb-3 text-[#2D2D2D]">
                        Science-Backed Formula
                      </h3>
                      <p className="text-[#5D5D5D] font-asfalit leading-relaxed">
                        Developed with microbiome research and pH-balanced to match your body's natural range (3.8-4.5)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gentle Ingredients */}
                <div className="bg-[#F5F1ED] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl">🌿</div>
                    <div>
                      <h3 className="font-mazier font-semibold text-2xl mb-3 text-[#2D2D2D]">
                        Gentle Ingredients
                      </h3>
                      <p className="text-[#5D5D5D] font-asfalit leading-relaxed">
                        No harsh sulfates, parabens, or synthetic fragrances. Only ingredients that work with your body
                      </p>
                    </div>
                  </div>
                </div>

                {/* Made for Women */}
                <div className="bg-[#F5F1ED] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl">💜</div>
                    <div>
                      <h3 className="font-mazier font-semibold text-2xl mb-3 text-[#2D2D2D]">
                        Made for Women
                      </h3>
                      <p className="text-[#5D5D5D] font-asfalit leading-relaxed">
                        Created by women who understand the real challenges of intimate wellness
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Clean product image */}
              <div className="flex justify-center items-center">
                <img 
                  src="/images/product-bottle.jpg" 
                  alt="Probya Product Bottle" 
                  className="w-full h-auto max-w-md mx-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Microbiome Matters Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-mazier font-bold text-[#2D2D2D] mb-6">
              Why Your Microbiome Matters
            </h2>
            
            <p className="text-lg font-asfalit text-[#5D5D5D] leading-relaxed mb-6">
              Your intimate microbiome is a complex ecosystem of bacteria that exists naturally in your body. For years, many intimate care products have been formulated with harsh ingredients—high pH levels, sulfates, and synthetic fragrances—that can be disruptive to this delicate environment.
            </p>

            <p className="text-lg font-asfalit text-[#5D5D5D] leading-relaxed mb-6">
              We took a different approach. Probya is formulated with your microbiome in mind. We've carefully selected gentle ingredients and balanced our pH to match your body's natural intimate range (3.8-4.5), because we believe intimate care should work <em className="text-[#C9A77C] font-semibold">with</em> your body, not against it.
            </p>

            <div className="mt-8 inline-block bg-[#F5F1ED] rounded-2xl px-8 py-4">
              <p className="text-[#2D2D2D] font-mazier font-semibold text-xl">
                pH-balanced • Microbiome-friendly • Science-backed
              </p>
            </div>
          </div>
        </div>
      </section>



       {/* Spacing before section */}
      <div className="h-16 bg-white"></div>

      {/* Closing the Gender Health Gap Section - Restructured */}
      <section className="bg-[#672725] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
                <p className="text-white font-asfalit text-sm font-semibold">OUR IMPACT</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-mazier font-bold text-white mb-4">
                Closing the Gender Health Gap
              </h2>
              <p className="text-lg font-asfalit text-white/90 max-w-3xl mx-auto">
                Women's health has been underfunded and under-researched for too long. We're committed to changing that.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Left side - 3 Statistics with more spacing */}
              <div className="flex flex-col justify-between space-y-6">
                {/* Statistic 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 flex flex-col justify-center">
                  <p className="text-4xl font-bold text-[#5D5D5D] mb-2">4%</p>
                  <p className="text-[#2D2D2D] font-asfalit mb-1">
                    of healthcare R&D funding goes to female-specific conditions
                  </p>
                  <p className="text-xs font-asfalit text-[#5D5D5D] italic">
                    Source: McKinsey Global Institute, 2024
                  </p>
                </div>

                {/* Statistic 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 flex flex-col justify-center">
                  <p className="text-4xl font-bold text-[#5D5D5D] mb-2">70%</p>
                  <p className="text-[#2D2D2D] font-asfalit mb-1">
                    of women feel their health concerns are dismissed by healthcare providers
                  </p>
                  <p className="text-xs font-asfalit text-[#5D5D5D] italic">
                    Source: Women's Health Access Matters Study, 2023
                  </p>
                </div>

                {/* Statistic 3 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 flex flex-col justify-center">
                  <p className="text-4xl font-bold text-[#5D5D5D] mb-2">9 years</p>
                  <p className="text-[#2D2D2D] font-asfalit mb-1">
                    average time for women to receive an accurate diagnosis for conditions like endometriosis
                  </p>
                  <p className="text-xs font-asfalit text-[#5D5D5D] italic">
                    Source: Endometriosis UK Research, 2023
                  </p>
                </div>
              </div>

              {/* Right side - Daya Ventures */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="font-mazier font-semibold text-2xl text-[#2D2D2D] mb-2">
                    Proud Member of
                  </h3>
                </div>
                
                {/* Image without border, with rounded corners */}
                <div className="flex items-center justify-center mb-6 flex-1">
                  <img 
                    src="/images/dayaventures.webp" 
                    alt="Daya Ventures" 
                    className="max-w-full h-auto rounded-2xl"
                  />
                </div>

                <div className="text-center">
                  <p className="font-mazier font-semibold text-xl text-[#2D2D2D] mb-2">
                    Spring 2025 Cohort
                  </p>
                  <p className="text-[#5D5D5D] font-asfalit text-sm">
                    Selected as part of Daya Ventures' prestigious accelerator program supporting women-led health innovation
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission - Full width below both columns */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
              <h4 className="font-mazier font-semibold text-2xl text-[#2D2D2D] mb-3 text-center">
                Our Mission
              </h4>
              <p className="text-[#5D5D5D] font-asfalit text-lg leading-relaxed text-center">
                We're funding clinical trials, supporting women's health research, and advocating for better data on women's bodies. Every purchase helps us push for the research and solutions women deserve.
              </p>
            </div>

            {/* Bottom CTA - Full width */}
            <div className="text-center bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="font-mazier font-semibold text-3xl text-[#2D2D2D] mb-4">
                Join the Movement
              </h3>
              <p className="text-[#5D5D5D] font-asfalit text-lg mb-6 max-w-2xl mx-auto">
                Be part of closing the gender health gap. Every waitlist signup brings us closer to launching products that support women's health while funding critical research.
              </p>
              <a 
            href="#waitlist"
            className="inline-block bg-[#2D2D2D] text-white px-8 py-4 rounded-lg font-asfalit font-semibold hover:bg-[#1D1D1D] transition text-lg"
          >
            Join the Waitlist
          </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing after section */}
      <div className="h-16 bg-white"></div>



      

     {/* Founder Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-mazier font-bold text-center text-[#2D2D2D] mb-12">
            Meet Our Founder
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FFFFFF] rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="text-5xl text-[#C9A77C] mb-4">"</div>
                  <p className="text-xl font-asfalit text-[#2D2D2D] mb-4 leading-relaxed">
                    I started Probya because I believe every woman deserves intimate care 
                    products that truly work with her body, not against it.
                  </p>
                  <p className="text-lg font-asfalit text-[#5D5D5D] mb-6 leading-relaxed">
                    After experiencing my own struggles with harsh products that disrupted 
                    my natural balance, I knew there had to be a better way. Probya was born 
                    from a simple mission: to create science-backed intimate care that respects 
                    and supports the delicate microbiome.
                  </p>
                  <div className="text-5xl text-[#C9A77C] text-right mb-4">"</div>
                  <div className="mt-6">
                    <p className="text-[#C9A77C] font-mazier font-semibold text-xl">
                      Samira
                    </p>
                    <p className="text-[#5D5D5D] font-asfalit">
                      Founder & CEO, Probya
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 rounded-xl overflow-hidden h-80 md:h-96 bg-[#FFFFFF] flex items-center justify-center">
                  <img 
                    src="/images/founder.png" 
                    alt="Samira, Founder of Probya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="bg-[#FCFAED] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-mazier font-bold text-black/70 mb-4">
            Ready to Transform Your Intimate Care?
          </h2>
          <p className="text-black/70 font-asfalit text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of women who are waiting for a better approach to feminine wellness.
          </p>
          <a 
            href="#waitlist"
            className="inline-block bg-[#2D2D2D] text-white px-8 py-4 rounded-lg font-asfalit font-semibold hover:bg-[#1D1D1D] transition text-lg"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <img src="/images/logo.png" alt="Probya" className="h-8 mx-auto mb-6 brightness-0 invert" />
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-6">
              {/* Instagram */}
              <a 
                href="https://instagram.com/probya.care" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#C9A77C] transition transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@probya.care" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#C9A77C] transition transform hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Email Contact */}
            <div className="mb-6">
              <p className="text-gray-400 font-asfalit text-sm mb-2">Get in touch with us:</p>
              <a 
                href="mailto:hello@probya.com" 
                className="text-white hover:text-[#C9A77C] transition font-asfalit text-lg"
              >
                hello@probya.com
              </a>
            </div>

            <p className="text-sm font-asfalit text-gray-400">
              © 2026 Probya. Feminine wellness designed with your microbiome in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}