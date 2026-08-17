import { Phone, Mail, Clock, ArrowRight, ChevronDown, MapPin, ExternalLink } from "lucide-react";
import { useState } from "react";
import ContactUsImage from "../assets/images/ContactUsImage.jpeg";

const faqs = [
  { q: "Do you accept international insurance?", a: "Yes, we work with most major international insurance providers. Please contact our billing team with your policy details for verification." },
  { q: "How long is the wait time for an appointment?", a: "Standard appointments are typically available within 3-5 business days. Urgent cases are prioritized and seen sooner." },
  { q: "Is there a cost for a second opinion consultation?", a: "Second opinion consultations are charged at our standard consultation rate. Contact us for current pricing." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            PATIENT SUPPORT Centre
          </span>
          <h1 className="text-5xl font-bold mb-5">
            <span className="text-teal-900">Get in </span>
            <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-gray-500 leading-relaxed mb-4">
            If you are looking for advanced robotic surgery treatment or would like
            to consult an experienced robotic surgeon, our team at Novo Robotic
            Surgery Centre is here to help. We are committed to providing
            personalised care, clear guidance, and support at every step of your
            treatment journey.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether you have questions about robotic surgery, want a second
            opinion, or wish to book an appointment with Dr Vikrant Sharma, feel
            free to contact us.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={ContactUsImage}
            alt="Robotic surgery console"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-teal-700 font-bold text-lg">0.1mm</span>
            <span className="text-xs text-gray-500 font-medium leading-tight">
              SURGICAL PRECISION<br />GUARANTEED
            </span>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-gray-50 px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-teal-900 mb-8">Contact Information</h2>
            <div className="space-y-4">
              <InfoCard icon={<Phone size={20} />} iconBg="bg-teal-50 text-teal-700" label="PHONE" value="8882844375, 
8527516622" />
              <InfoCard icon={<Mail size={20} />} iconBg="bg-gray-100 text-gray-700" label="EMAIL" value="enquiry@novorobotic.com" />
              <InfoCard icon={<Clock size={20} />} iconBg="bg-yellow-100 text-yellow-700" label="HOURS" value="Mon – Sun: 09:00 AM to 06:00 PM" />
            </div>
          </div>

          <form className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <Field label="FULL NAME" placeholder="John Doe" />
              <Field label="PHONE NUMBER" placeholder="+91 00000 00000" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="EMAIL" placeholder="john@example.com" />
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">SUBJECT</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
                  <option>General Inquiry</option>
                  <option>Book Appointment</option>
                  <option>Second Opinion</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">MESSAGE</label>
              <textarea
                rows={4}
                placeholder="How can we help you today?"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-teal-900 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Location */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-900 mb-4">Our Location</h2>
        <div className="flex items-start justify-between mb-6 flex-wrap gap-2">
          <p className="flex items-start gap-2 text-gray-500 text-sm max-w-xl">
            <MapPin size={18} className="text-teal-700 shrink-0 mt-0.5" />
            NOVO Robotic Surgery Centre B-12/13, Opposite Dabur India Corporation
            Limited, Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh, India - 201010.
          </p>
          <a href="#" className="flex items-center gap-1 text-teal-700 text-sm font-semibold whitespace-nowrap">
            OPEN IN GOOGLE MAPS <ExternalLink size={14} />
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-100 h-96 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          Map embed goes here
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-6 md:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-3">Common Questions</h2>
          <p className="text-gray-500 mb-10">Quick answers to help you understand our services and logistics better.</p>

          <div className="space-y-3 text-left">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-teal-900 text-sm">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function InfoCard({ icon, iconBg, label, value }) {
  return (
    <div className="bg-white rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm">
      <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-400">{label}</div>
        <div className="font-semibold text-teal-950">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
    </div>
  );
}