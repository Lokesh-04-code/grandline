import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E3FDFD] text-slate-800 selection:bg-[#71C9CE] selection:text-white">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-5 md:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-4">Last updated: April 2026</p>
          <p className="text-slate-600 mb-4">
            These Terms of Service constitute a legally binding agreement made between you and AEAEA Technologies concerning your access to and use of the grandline.aeaeatech.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
          <p className="text-slate-600 mb-4">
            (This is a placeholder page for the Terms of Service. Please replace with actual terms text.)
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
