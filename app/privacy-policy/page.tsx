import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Smart Student Hub',
  description: 'Privacy Policy for Smart Student Hub. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Smart Student Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <p className="text-gray-700">
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Information You Provide</h3>
          <p className="text-gray-700 mb-4">
            We may collect information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our contact form</li>
            <li>Leave comments on our blog posts</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p className="text-gray-700">
            This information may include your name, email address, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">
            When you visit our website, we automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Date and time of your visit</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="text-gray-700 mb-4">
            Types of cookies we use:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
          <p className="text-gray-700">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Google AdSense</h2>
          <p className="text-gray-700 mb-4">
            Our website uses Google AdSense, a service provided by Google LLC ("Google") for displaying advertisements. Google AdSense uses cookies and web beacons to collect information about your visits to this and other websites to provide advertisements about goods and services of interest to you.
          </p>
          <p className="text-gray-700 mb-4">
            Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
          </p>
          <p className="text-gray-700 mb-4">
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.
          </p>
          <p className="text-gray-700">
            For more information about Google AdSense, please visit <a href="https://policies.google.com/technologies/ads" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google's Advertising Privacy & Terms</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide, maintain, and improve our website</li>
            <li>Send you newsletters and updates (if you subscribe)</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze how our website is used and improve user experience</li>
            <li>Display personalized advertisements</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We may use third-party services that collect, monitor, and analyze information. These services include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Google Analytics:</strong> Website analytics and usage statistics</li>
            <li><strong>Google AdSense:</strong> Advertising services</li>
            <li><strong>Newsletter Services:</strong> Email marketing and management</li>
          </ul>
          <p className="text-gray-700">
            These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          <p className="text-gray-700">
            While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights (GDPR & CCPA)</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">If you are in the European Economic Area (EEA):</h3>
          <p className="text-gray-700 mb-4">
            Under the General Data Protection Regulation (GDPR), you have certain rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">If you are in California:</h3>
          <p className="text-gray-700 mb-4">
            Under the California Consumer Privacy Act (CCPA), you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Know what personal information is collected</li>
            <li>Know if your personal information is sold or disclosed</li>
            <li>Opt-out of the sale of personal information</li>
            <li>Access your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Non-discrimination for exercising your privacy rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="text-gray-700">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-primary-600 hover:underline">Contact page</a>.
          </p>
          <p className="text-gray-700">
            For requests regarding your personal data rights, please include "Privacy Request" in your message subject line.
          </p>
        </section>
      </div>
    </div>
  )
}
