import { siteConfig, smsHref } from "../lib/seo";

/**
 * "Text us a photo" link shown under call/estimate buttons.
 *
 * Plenty of homeowners would rather snap a picture of the crack or stain than
 * explain it on the phone. Renders nothing unless siteConfig.textEnabled is
 * true, so it can be switched off in one place if the business line cannot
 * receive texts. Clicks are reported as `text_click` by components/Analytics.jsx.
 */
export default function TextPhotoLink({ source = "unknown", className = "" }) {
  if (!siteConfig.textEnabled) return null;

  return (
    <p className={`text-photo ${className}`.trim()}>
      <a href={smsHref} data-text-cta={source}>
        <span aria-hidden="true">&#128247;</span> Or text us a photo of the problem:{" "}
        <strong>{siteConfig.phoneDisplay}</strong>
      </a>
    </p>
  );
}
