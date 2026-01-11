import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Smart Student Hub',
  description: 'Learn about Smart Student Hub - your trusted resource for AI tools, career guidance, and student productivity tips. We help students excel in college and beyond.',
}

export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Smart Student Hub</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Smart Student Hub, we believe that every student deserves access to the tools, knowledge, and strategies needed to excel in college and launch a successful career. Our mission is to empower students with practical, actionable guidance on AI tools, career development, and productivity.
          </p>
          <p className="text-lg text-gray-700">
            We understand the challenges students face—balancing academics, building skills, maintaining health, and planning for the future. That's why we create comprehensive, evidence-based content that addresses real student needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Who We're For</h2>
          <p className="text-lg text-gray-700 mb-4">
            Smart Student Hub is designed for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>College students</strong> seeking to maximize their academic performance and career readiness</li>
            <li><strong>Beginners in AI & tech</strong> who want to learn how to leverage cutting-edge tools effectively</li>
            <li><strong>Career-focused learners</strong> planning their path in technology, AI, and related fields</li>
            <li><strong>Productivity seekers</strong> looking for proven strategies to balance college life and achieve more</li>
          </ul>
          <p className="text-lg text-gray-700">
            Whether you're a first-year student just starting your journey or a senior preparing for your career, we provide resources tailored to your needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2">Honest & Helpful Content</h3>
              <p>
                We provide honest, practical advice based on real experience and research. Our content is designed to genuinely help you, not just drive clicks. We test tools, verify information, and share both pros and cons.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Student-First Approach</h3>
              <p>
                Every piece of content is created with students in mind. We understand your constraints—limited budgets, busy schedules, and the need for practical solutions. Our recommendations prioritize free and affordable options.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Up-to-Date Information</h3>
              <p>
                The tech and education landscape changes rapidly. We regularly update our content to reflect the latest tools, trends, and best practices. Our articles are current and relevant for 2026 and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Accessible & Beginner-Friendly</h3>
              <p>
                We believe complex topics should be accessible. Our content is written in clear, beginner-friendly language without sacrificing depth. We explain technical concepts in ways that make sense.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Non-Affiliation Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            Smart Student Hub is an independent educational resource. We are not affiliated with, endorsed by, or sponsored by any of the companies, tools, or services we mention in our content.
          </p>
          <p className="text-gray-700 mb-4">
            Our recommendations are based on our research, testing, and analysis. We may earn advertising revenue through Google AdSense, but this does not influence our editorial content or recommendations.
          </p>
          <p className="text-gray-700">
            We provide honest reviews and comparisons to help you make informed decisions. When we recommend a tool, it's because we believe it genuinely helps students, not because we're paid to say so.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Google AdSense Compliance</h2>
          <p className="text-gray-700 mb-4">
            This website uses Google AdSense to display advertisements. We are committed to maintaining compliance with Google AdSense policies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We provide original, valuable content created specifically for our audience</li>
            <li>We do not use clickbait, misleading content, or deceptive practices</li>
            <li>We maintain clear navigation and user-friendly design</li>
            <li>We respect user privacy and comply with data protection regulations</li>
            <li>We clearly distinguish advertisements from editorial content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions, suggestions, or feedback? We'd love to hear from you. Visit our <a href="/contact" className="text-primary-600 hover:underline">Contact page</a> to get in touch.
          </p>
          <p className="text-gray-700">
            Thank you for being part of the Smart Student Hub community. We're here to support your journey toward academic and career success.
          </p>
        </section>
      </div>
    </div>
  )
}
