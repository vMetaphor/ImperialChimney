import Script from "next/script";
import ContactScripts from "../../components/ContactScripts";
import { contactHtml } from "../../lib/pageHtml";

export const metadata = {
  title: "Contact Imperial Chimney & Masonry in Pottstown, PA | Chimney & Masonry Estimates",
  description:
    "Contact Imperial Chimney & Masonry in Pottstown, PA 19464 to schedule chimney sweeping, chimney repair, masonry services, dryer vent cleaning, or pressure washing in nearby towns.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Imperial Chimney & Masonry",
    description:
      "Request a free estimate for chimney sweeping, masonry repairs, and fireplace services in Pottstown, PA.",
    url: "/contact"
  }
};

export default function ContactPage() {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const mainHtml = contactHtml
    .replace(/action="send-mail\.php"/i, 'action="/api/contact"')
    .replace(/data-sitekey="[^"]*"/i, `data-sitekey="${recaptchaSiteKey}"`);

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <div className="modal-backdrop" id="modalBackdrop">
        <div className="modal">
          <h3>Message sent</h3>
          <p>Your message has been sent! We'll reach out to you shortly.</p>
          <div className="actions">
            <button className="btn-secondary" type="button" id="modalOk">
              OK
            </button>
            <button className="btn-close" type="button" id="modalClose">
              Close
            </button>
          </div>
          <div className="modal-progress">
            <div className="modal-progress-bar" id="modalProgressBar"></div>
          </div>
        </div>
      </div>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <ContactScripts />
    </>
  );
}
