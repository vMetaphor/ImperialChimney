/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Douglassville post was retitled: it had been published as a chimney
      // stucco repair but the photos are a walkway pressure wash. The old URL
      // was live and in the sitemap, so it redirects rather than 404s.
      {
        source: "/projects/chimney-stucco-repair-douglassville-pa",
        destination: "/projects/walkway-pressure-washing-douglassville-pa",
        permanent: true
      },
      // This post was unpublished (it used stucco photos to illustrate a
      // pressure washing job). Send its indexed URL to the project index.
      {
        source: "/projects/pressure-washing-project-phoenixville-pa",
        destination: "/projects",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
