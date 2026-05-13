import Link from "next/link";
import { locationServicePages } from "../lib/locationPages";
import { featuredServicePages } from "../lib/seo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Popular Searches</h4>
          <ul>
            {featuredServicePages.map((service) => (
              <li key={service.href}>
                <Link href={service.href}>{service.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/services">View All Services</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Service Areas</h4>
          <ul>
            {locationServicePages.map((page) => (
              <li key={page.slug}>
                <Link href={`/${page.slug}`}>{page.city}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Contacts</h4>
          <p>
            864 Queen Street<br />
            Pottstown, PA 19464
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@imperialchimney-masonry.com">
              info@imperialchimney-masonry.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:14844471414">484-447-1414</a>
          </p>
          <p>{"Mon\u2013Thurs: 7am \u2013 5pm"}</p>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=61573033617875"
              target="_blank"
              rel="noopener"
            >
              Facebook
            </a>
            <br />
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>Copyright &copy; Imperial Chimney &amp; Masonry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
