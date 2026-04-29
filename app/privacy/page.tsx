import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E3FDFD] text-slate-800 selection:bg-[#71C9CE] selection:text-white">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-5 md:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-4">Last updated: April 2026</p>
          <p className="text-slate-600 mb-4">
            AEAEA Technologies ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website grandline.aeaeatech.com and use our college recommendation services.
          </p>
          <p className="text-slate-600 mb-4">
            (This is a placeholder page for the Privacy Policy. Please replace with actual policy text.)
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
