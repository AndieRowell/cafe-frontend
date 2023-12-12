/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dummyimage.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYXJvd2VsbCIsImEiOiJjbHExbm9nNzQwYmh2Mm1wZzJ5aTB2dDNnIn0.eEInI-qOM5DtdJkQTt1-YQ",
  },
};

module.exports = nextConfig;

//add images configuration?
