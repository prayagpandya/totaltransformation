// Draft legal copy — have these reviewed and replaced by the client's legal advisor.
export const legalPages: Record<string, {title: string;intro: string;sections: {heading: string;text: string;}[];}> = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'How Total Transformation handles the information you share with us.',
    sections: [
    { heading: 'Information we collect', text: 'We collect only what you choose to share through our enquiry and booking forms — such as your name, email, phone number and programme interest.' },
    { heading: 'How we use it', text: 'Your information is used solely to respond to your enquiry and arrange coaching sessions. We do not sell your data.' },
    { heading: 'Sensitive information', text: 'Please do not share medical or clinical information through website forms or WhatsApp. Such matters are discussed privately.' },
    { heading: 'Your choices', text: 'You may ask us to update or delete your information at any time by contacting us.' }]

  },
  terms: {
    title: 'Terms & Conditions',
    intro: 'The terms that apply when you use this website and our coaching services.',
    sections: [
    { heading: 'Coaching services', text: 'Coaching programmes are personalised following an initial consultation. Final scope, schedule and fees are confirmed before enrolment.' },
    { heading: 'Fees', text: 'Programme fees shown on this website are indicative and may vary depending on your final personalised coaching plan.' },
    { heading: 'Website content', text: 'Content on this website is provided for general information and personal reflection only.' }]

  },
  disclaimer: {
    title: 'Disclaimer',
    intro: 'Important information about the nature of our coaching.',
    sections: [
    { heading: 'Not medical advice', text: 'Life coaching is not a substitute for medical, psychiatric or psychological diagnosis or treatment. If you have health concerns, please consult a qualified professional.' },
    { heading: 'Self-reflection tools', text: 'The Transformation Assessment is a self-reflection tool, not a diagnostic test.' },
    { heading: 'Individual results', text: 'Client testimonials are shared with permission. Individual experiences vary and results are not guaranteed.' }]

  }
};