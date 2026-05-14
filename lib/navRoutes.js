export const featuredServicePathnames = [
  "/chimney-sweep-pottstown-pa",
  "/chimney-repair-pottstown-pa",
  "/chimney-stucco-repair-pottstown-pa",
  "/masonry-repair-pottstown-pa",
  "/pressure-washing-pottstown-pa"
];

export function isFeaturedServicePath(pathname) {
  return pathname === "/services" || featuredServicePathnames.includes(pathname);
}

export function isLocationServicePath(pathname) {
  return pathname === "/service-areas" || pathname.startsWith("/service-areas/");
}
