// app/terms-of-service/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Calendra",
  description: "Terms and conditions for using our scheduling application",
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 1, 2024"; // Replace with actual date

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
          {/* Terms Content */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Welcome to Calendra, a scheduling application clone. By
                  accessing or using our Service, you agree to be bound by these
                  Terms of Service. If you do not agree to these Terms, please
                  do not use the Service.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="description" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Calendra is a web-based scheduling tool that allows users to:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                  <li>Create and manage appointment schedules</li>
                  <li>Share availability with others</li>
                  <li>Book, reschedule, or cancel appointments</li>
                  <li>Integrate with calendar services</li>
                  <li>Send automated notifications</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="eligibility" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Eligibility
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  You must be at least 18 years old to use this Service. By
                  using the Service, you represent and warrant that you have the
                  right, authority, and capacity to enter into these Terms.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="accounts" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. User Accounts
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.1 Registration
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    You must create an account to access certain features. You
                    agree to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information</li>
                    <li>Maintain the security of your password</li>
                    <li>
                      Accept responsibility for all activities under your
                      account
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Top */}
        </div>
      </main>
    </div>
  );
}
