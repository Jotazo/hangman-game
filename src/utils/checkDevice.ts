type Devices = "mobile" | "tablet" | "desktop";

export const checkDevice = (): Devices => {
  const isMobile = window.matchMedia(
    "only screen and (min-width : 320px) and (max-width : 640px)"
  ).matches;

  const isTablet = window.matchMedia(
    "only screen and (min-width : 641px) and (max-width : 1280px)"
  ).matches;

  const isDesktop = window.matchMedia(
    "only screen and (min-width : 1281px)"
  ).matches;

  if (!isMobile && !isTablet && !isDesktop)
    throw new Error("Unsuported Device");

  return isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
};
