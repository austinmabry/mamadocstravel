/* =====================================================================
   Petty Bestie — creator directory
   ---------------------------------------------------------------------
   To add a new physician, copy one of the objects below, paste it at the
   end of the CREATORS array, and fill in her details. Only "name" and
   "site" are required; leave any other field out (or empty) and it will
   simply not be shown.

   Fields:
     name       – display name, e.g. "Dr. Jane Smith"
     handle     – primary social handle, e.g. "@janetravels"
     specialty  – e.g. "Pediatrics"
     tagline    – one short line (keep it under ~50 characters)
     site       – full URL for the VISIT button
     photo      – optional path to a square headshot, e.g.
                  "assets/creators/jane.jpg" (drop the file in that folder).
                  If omitted, a monogram avatar is shown instead.
     socials    – optional links. Supported keys: instagram, tiktok,
                  youtube, facebook, pinterest, podcast, website
   ===================================================================== */

const CREATORS = [
  {
    name: "Dr. Devon Gimbel",
    handle: "@pointmeto_firstclass",
    specialty: "Physician & Podcast Host",
    tagline: "Travel more. Travel business. Travel guilt-free.",
    site: "https://pointmetofirstclass.com",
    photo: "assets/creators/devon-gimbel.jpg",
    socials: {
      instagram: "https://www.instagram.com/pointmeto_firstclass",
      facebook: "https://www.facebook.com/PointMeToFirstClass",
      website: "https://pointmetofirstclass.com"
    }
  },
  {
    name: "Dr. Kelly Wright",
    handle: "@pointsandmilesdoc",
    specialty: "Academic Surgeon",
    tagline: "Fighting burnout with points and miles.",
    site: "https://www.pointsandmilesdoc.com",
    photo: "assets/creators/kelly-wright.jpg",
    socials: {
      instagram: "https://www.instagram.com/pointsandmilesdoc",
      website: "https://www.pointsandmilesdoc.com"
    }
  },
  {
    name: "Dr. Courtney Downes",
    handle: "@prescriptiontotravelmd",
    specialty: "Emergency Medicine",
    tagline: "Wellness, adventure and travel on points.",
    site: "https://prescriptiontotravelmd.com",
    photo: "assets/creators/courtney-downes.jpg",
    socials: {
      instagram: "https://www.instagram.com/prescriptiontotravelmd",
      youtube: "https://www.youtube.com/@PrescriptiontoTravelMD",
      podcast: "https://podcasts.apple.com/us/podcast/prescription-to-travel-md/id1736339637",
      website: "https://prescriptiontotravelmd.com"
    }
  },
  {
    name: "Dr. Michelle",
    handle: "@doctorpointsandpassports",
    specialty: "Emergency Medicine",
    tagline: "Everyday spending, turned into trips around the globe.",
    site: "https://doctorpointsandpassports.com",
    photo: "assets/creators/michelle-doctorpointsandpassports.jpg",
    socials: {
      instagram: "https://www.instagram.com/doctorpointsandpassports/",
      website: "https://doctorpointsandpassports.com"
    }
  },
  {
    name: "Dr. Shannon",
    handle: "@lattesandlayoversblog",
    specialty: "Public Health",
    tagline: "Sip, stamp, repeat.",
    site: "https://lattes-and-layovers.com",
    photo: "assets/creators/shannon-lattes-and-layovers.jpg",
    socials: {
      instagram: "https://www.instagram.com/lattesandlayoversblog",
      tiktok: "https://www.tiktok.com/@lattesandlayoversblog",
      pinterest: "https://www.pinterest.com/lattesandlayoversblog",
      website: "https://lattes-and-layovers.com"
    }
  }
];
