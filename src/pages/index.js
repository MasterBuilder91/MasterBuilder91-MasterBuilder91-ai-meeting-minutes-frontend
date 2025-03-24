import { useState } from 'react';
import Head from 'next/head';
import SubscriptionForm from '../components/SubscriptionForm';
import PricingPlans from '../components/PricingPlans';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('monthly');
  
  const handleSuccess = () => {
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-light">
      <Head>
        <title>AI Meeting Minutes Agent</title>
        <meta name="description" content="Automated meeting minutes with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-dark mb-8">
            AI Meeting Minutes Agent
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Automatically transcribe, summarize, and extract action items from your meetings
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Choose Your Plan</h2>
            
            <PricingPlans plan={plan} setPlan={setPlan} />
            
            {!success ? (
              <SubscriptionForm 
                plan={plan} 
                email={email} 
                setEmail={setEmail} 
                setPlan={setPlan} 
                onSuccess={handleSuccess} 
              />
            ) : (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">Payment Successful!</h3>
                <p className="text-gray-600 mb-6">Thank you for subscribing to AI Meeting Minutes Agent.</p>
                <p className="text-gray-600">You'll receive a confirmation email shortly.</p>
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
              title="Auto-Join Meetings"
              description="Our AI agent automatically joins your scheduled meetings on Zoom, Google Meet, and Microsoft Teams."
            />
            
            <FeatureCard 
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Structured Minutes"
              description="Get professionally formatted meeting minutes with key decisions and discussion points clearly highlighted."
            />
            
            <FeatureCard 
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="Action Item Tracking"
              description="Never miss a follow-up task with automatic extraction and assignment of action items from your meetings."
            />
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">Ready to transform your meetings?</h2>
            <p className="mb-8">Join thousands of professionals who save time with AI Meeting Minutes Agent</p>
            <p className="text-sm text-gray-400">© 2025 AI Meeting Minutes Agent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
