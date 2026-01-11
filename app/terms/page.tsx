import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Smart Student Hub',
  description: 'Terms and Conditions for Smart Student Hub. Read our terms of use, content usage rules, and disclaimers.',
}

export default function TermsPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using Smart Student Hub ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily access the materials on Smart Student Hub for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          <p className="text-gray-700 mt-4">
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Smart Student Hub at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Content Usage Rules</h2>
          <h3 className="text-xl font-semibold mb-3 mt-6">Educational Use</h3>
          <p className="text-gray-700 mb-4">
            You may use our content for personal, educational, and non-commercial purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Reading and learning from our articles</li>
            <li>Sharing articles on social media (with proper attribution)</li>
            <li>Using information for your academic work (with proper citation)</li>
            <li>Printing articles for personal study</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">Prohibited Uses</h3>
          <p className="text-gray-700 mb-4">
            You may NOT:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Republish our content without permission</li>
            <li>Use our content for commercial purposes without authorization</li>
            <li>Plagiarize or claim our content as your own</li>
            <li>Scrape or systematically collect our content</li>
            <li>Use our content to train AI models without permission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer of Liability</h2>
          <p className="text-gray-700 mb-4">
            The materials on Smart Student Hub are provided on an 'as is' basis. Smart Student Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="text-gray-700 mb-4">
            Further, Smart Student Hub does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
          <p className="text-gray-700">
            <strong>Limitation of Liability:</strong> In no event shall Smart Student Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Smart Student Hub's website, even if Smart Student Hub or a Smart Student Hub authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Smart Student Hub. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
          <p className="text-gray-700 mb-4">
            The inclusion of any link does not imply endorsement by Smart Student Hub. We are not responsible for the content of linked external sites and do not make any representations regarding their content or accuracy.
          </p>
          <p className="text-gray-700">
            Your use of any external website is at your own risk, and you should review the terms and conditions and privacy policies of those websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
          <p className="text-gray-700 mb-4">
            All content on Smart Student Hub, including but not limited to text, graphics, logos, images, and software, is the property of Smart Student Hub or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-gray-700">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent, except as permitted under these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User-Generated Content</h2>
          <p className="text-gray-700 mb-4">
            If you submit comments, feedback, or other content to our website, you grant Smart Student Hub a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, and distribute such content in any form, medium, or technology.
          </p>
          <p className="text-gray-700">
            You represent and warrant that you own or have the necessary rights to grant this license and that your content does not violate any third-party rights or applicable laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Accuracy of Information</h2>
          <p className="text-gray-700 mb-4">
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
          </p>
          <p className="text-gray-700">
            Any reliance you place on such information is strictly at your own risk. We recommend verifying important information independently, especially regarding academic policies, career advice, and tool recommendations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modification & Termination</h2>
          <p className="text-gray-700 mb-4">
            Smart Student Hub reserves the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Modify or discontinue the website at any time without notice</li>
            <li>Update these Terms & Conditions at any time</li>
            <li>Terminate or suspend access to the website for any reason</li>
            <li>Remove or edit content at our discretion</li>
          </ul>
          <p className="text-gray-700">
            Continued use of the website after changes to these Terms constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-700">
            These Terms & Conditions shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Severability</h2>
          <p className="text-gray-700">
            If any provision of these Terms & Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms & Conditions, please contact us through our <a href="/contact" className="text-primary-600 hover:underline">Contact page</a>.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 text-sm">
            <strong>Note:</strong> These Terms & Conditions are subject to change. We recommend reviewing this page periodically to stay informed of any updates. Your continued use of the website after changes constitutes acceptance of the modified terms.
          </p>
        </section>
      </div>
    </div>
  )
}
