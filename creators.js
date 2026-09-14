/* =====================================================================
   Mama Docs Travel — creator directory
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
                  youtube, facebook, podcast, website
   ===================================================================== */

const CREATORS = [
  {
    name: "Dr. Devon Gimbel",
    handle: "@pointmeto_firstclass",
    specialty: "Physician & Podcast Host",
    tagline: "Travel more. Travel business. Travel guilt-free.",
    site: "https://pointmetofirstclass.com",
    photo: "",
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
    photo: "",
    socials: {
      instagram: "https://www.instagram.com/pointsandmilesdoc",
      website: "https://www.pointsandmilesdoc.com"
    }
  }
];

/* Email used by the "Join the journey" / "Request to be listed" buttons. */
const CONTACT_EMAIL = "hello@mamadocstravel.com";
