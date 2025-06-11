import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import GPAY_QR from '../assets/gpay_qr.jpeg'

const Payment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    plan: ''
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Plan pricing
  const planPrices = {
    'Club Crystal': '₹378/week',
    'Club Pearl': '₹564/week',
    'Club Ruby': '₹1045/week'
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (currentStep === 1) {
      if (!form.name || !form.phone || !form.email || !form.plan) {
        setErrorMessage('Please fill all fields before proceeding.');
        return;
      }
      setCurrentStep(2);
      setSuccessMessage('Details saved successfully!');
    } else if (currentStep === 2) {
      if (!acceptedTerms) {
        setErrorMessage('Please accept the terms and conditions to proceed.');
        return;
      }
      setCurrentStep(3);
      setSuccessMessage('Terms accepted successfully!');
    }
  };

  const handleBack = () => {
    setErrorMessage('');
    setSuccessMessage('');
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // First send to EmailJS
      await emailjs.send(
        import.meta.env.VITE_CONTACT_SERVICE_KEY,
        import.meta.env.VITE_CONTACT_TEMPLATE_KEY,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          plan: form.plan,
          price: planPrices[form.plan]
        },
        import.meta.env.VITE_CONTACT_PUBLIC_KEY
      );

      // JSONP solution for Google Sheets
      const callbackName = `jsonp_${Date.now()}`;
      const scriptUrl = `${import.meta.env.VITE_GOOGLE_SCRIPT_URL}?callback=${callbackName}&` +
        `name=${encodeURIComponent(form.name)}&` +
        `email=${encodeURIComponent(form.email)}&` +
        `phone=${encodeURIComponent(form.phone)}&` +
        `plan=${encodeURIComponent(form.plan)}&` +
        `price=${encodeURIComponent(planPrices[form.plan])}&` +
        `paymentMethod=UPI`;

      await new Promise((resolve, reject) => {
        window[callbackName] = (response) => {
          delete window[callbackName];
          if (response.result === 'success') {
            resolve();
          } else {
            reject(new Error(response.error || 'Google Sheets save failed'));
          }
        };

        const script = document.createElement('script');
        script.src = scriptUrl;
        script.onerror = () => {
          delete window[callbackName];
          reject(new Error('Failed to connect to Google Sheets'));
        };
        document.body.appendChild(script);
      });

      // Success handling
      setShowSuccessModal(true);
      setForm({ name: '', phone: '', email: '', plan: '' });
      setAcceptedTerms(false);
      setCurrentStep(1);

    } catch (error) {
      console.error('Submission failed', error);
      setErrorMessage(`Payment submission failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="!space-y-4">
      <h2 className="text-2xl font-bold text-center !mb-6">Step 1: Your Details</h2>

      <input
        type="text"
        name="name"
        required
        placeholder="Your Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full !px-4 !py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full !px-4 !py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full !px-4 !py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <select
        name="plan"
        required
        value={form.plan}
        onChange={handleChange}
        className="w-full !px-4 !py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Select Subscription Plan</option>
        {Object.entries(planPrices).map(([plan, price]) => (
          <option key={plan} value={plan}>{plan} - {price}</option>
        ))}
      </select>

      <p className="text-sm font-medium text-gray-500">
        *GST will be charged separately on the invoice at 5%. Once our GST registration is official.
      </p>

      <button
        onClick={handleNext}
        className="w-full bg-blue-600 text-white !py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
      >
        Next Step
      </button>

      {/* Error/Success Messages */}
      {errorMessage && (
        <div className="!mt-4 !p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div className="!mt-4 !p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-600 text-sm font-medium">{successMessage}</p>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="!space-y-6">
      <h2 className="text-2xl font-bold text-center !mb-6">Step 2: Terms & Conditions</h2>

      <div className="bg-gray-50 !p-4 rounded-lg">
        <p className="font-semibold text-lg !mb-4">
          You have selected: <span className="text-blue-600">{form.plan}</span>
        </p>
        <p className="font-semibold text-lg !mb-4">
          Price: <span className="text-green-600">{planPrices[form.plan]}</span>
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg !p-6">
        <h3 className="font-semibold text-lg !mb-4">Please read the following terms carefully:</h3>

        <ul className="!space-y-3 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 !p-2 flex items-center justify-center text-xs !mr-3 !mt-0.5">1</span>
            <span>The price mentioned ({planPrices[form.plan]}) must be paid exactly as stated. Partial payments will not be accepted and will result in subscription cancellation.</span>
          </li>

          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 !p-2 flex items-center justify-center text-xs !mr-3 !mt-0.5">2</span>
            <span>If you do not pay the full fee, you will not be able to proceed with the subscription and access will be denied.</span>
          </li>

          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 !p-2 flex items-center justify-center text-xs !mr-3 !mt-0.5">3</span>
            <span>Once payment is made, the subscription will be activated within 1-5 hours. Refunds are subject to our refund policy.</span>
          </li>

          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 !p-2 flex items-center justify-center text-xs !mr-3 !mt-0.5">4</span>
            <span>By proceeding with the payment, you agree to our terms of service and privacy policy. The subscription is non-transferable.</span>
          </li>
        </ul>
      </div>

      <div className="flex items-center !space-x-3">
        <input
          type="checkbox"
          id="acceptTerms"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="acceptTerms" className="text-sm font-medium text-gray-700">
          I accept the terms and conditions mentioned above
        </label>
      </div>

      <div className="flex !space-x-4">
        <button
          onClick={handleBack}
          className="flex-1 bg-gray-500 text-white !py-3 rounded-md hover:bg-gray-600 transition-colors font-semibold"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!acceptedTerms}
          className={`flex-1 !py-3 rounded-md font-semibold transition-colors ${acceptedTerms
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Proceed to Payment
        </button>
      </div>

      {/* Error/Success Messages */}
      {errorMessage && (
        <div className="!mt-4 !p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div className="!mt-4 !p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-600 text-sm font-medium">{successMessage}</p>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="!space-y-6">
      <h2 className="text-2xl font-bold text-center !mb-6">Step 3: Make Payment</h2>

      <div className="bg-gray-50 !p-4 rounded-lg text-center">
        <p className="font-semibold">Plan: {form.plan}</p>
        <p className="font-semibold text-xl text-green-600">Amount: {planPrices[form.plan]}</p>
      </div>

      <div className="text-center">
        <h3 className="font-semibold !mb-4 text-lg">Scan QR Code to Pay</h3>

        {/* QR Code placeholder - replace with your actual QR code */}
        <div className="!mx-auto w-48 h-48 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <img src={GPAY_QR} className='' alt="" />
          </div>
        </div>

        <div className="bg-blue-50 !p-4 rounded-lg">
          <p className="text-sm text-gray-700 !mb-2">Or send payment directly to:</p>
          <p className="font-semibold text-blue-600">azimpatel1987@okicic</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 !p-4 rounded-lg">
        <p className="text-sm font-medium !py-2 text-yellow-800">
          <strong>Note:</strong> GST will be charged separately on the invoice at 5%. Once our GST registration is official.
        </p>
        <p className="text-sm text-yellow-800">
          <strong>Important:</strong> After making the payment, click the "Submit" button below to complete your subscription process.
        </p>
      </div>

      <div className="flex !space-x-4">
        <button
          onClick={handleBack}
          className="flex-1 bg-gray-500 text-white !py-3 rounded-md hover:bg-gray-600 transition-colors font-semibold"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="flex-1 bg-green-600 text-white !py-3 rounded-md hover:bg-green-700 transition-colors font-semibold disabled:bg-gray-400"
        >
          {loading ? 'Processing...' : 'Submit Payment'}
        </button>
      </div>
    </div>
  );

  const renderSuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white !p-8 rounded-lg shadow-xl max-w-md w-full !mx-4">
        <div className="text-center">
          <div className="text-6xl !mb-4">✅</div>
          <h3 className="text-2xl font-bold text-green-600 !mb-4">Thank you for your payment!</h3>
          <p className="text-gray-700 !mb-6">
            We’ve received your transaction and will be reviewing it shortly.
            Your Club subscription will be activated within 1–5 hours.
            Welcome to the Club & Bay BKC family — your mornings are about to change!
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-blue-600 text-white !px-6 !py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 !p-6 flex flex-col items-center justify-center">
      <div className="bg-white !p-8 rounded-xl shadow-lg w-full max-w-lg">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center !mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= step
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
                }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-1 !mx-2 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>

      {/* Success Modal */}
      {showSuccessModal && renderSuccessModal()}
    </div>
  );
};

export default Payment;