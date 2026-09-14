(function () {
  "use strict";

  const ICONS = {
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.5 3 2.5 5 5.5 5"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6H14v-6h2.5l.5-3.5h-3V8.5c0-.3.2-.5.5-.5z"/></svg>',
    podcast:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>',
    website:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg>'
  };

  const LABELS = {
    instagram: "Instagram",
    tiktok: "TikTok",
    youtube: "YouTube",
    facebook: "Facebook",
    podcast: "Podcast",
    website: "Website"
  };

  const grid = document.getElementById("doctor-grid");
  const search = document.getElementById("doctor-search");
  const emptyState = document.getElementById("doctor-empty");
  const countEl = document.getElementById("doctor-count");

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initials(name) {
    return name
      .replace(/^dr\.?\s+/i, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  }

  function avatar(c) {
    if (c.photo) {
      return '<img class="card__photo" src="' + esc(c.photo) + '" alt="" loading="lazy">';
    }
    return '<div class="card__monogram" aria-hidden="true"><span>' + esc(initials(c.name)) + "</span></div>";
  }

  function socials(c) {
    const s = c.socials || {};
    const keys = Object.keys(ICONS).filter((k) => s[k]);
    if (!keys.length) return "";
    return (
      '<ul class="card__socials" aria-label="Social links">' +
      keys
        .map(
          (k) =>
            '<li><a href="' +
            esc(s[k]) +
            '" target="_blank" rel="noopener" aria-label="' +
            esc(c.name + " on " + LABELS[k]) +
            '" title="' +
            esc(LABELS[k]) +
            '">' +
            ICONS[k] +
            "</a></li>"
        )
        .join("") +
      "</ul>"
    );
  }

  function card(c) {
    return (
      '<article class="card">' +
      '<div class="card__avatar">' +
      avatar(c) +
      "</div>" +
      '<h3 class="card__name">' +
      esc(c.name) +
      "</h3>" +
      (c.handle ? '<p class="card__handle">' + esc(c.handle) + "</p>" : "") +
      (c.specialty ? '<p class="card__specialty">' + esc(c.specialty) + "</p>" : "") +
      (c.tagline ? '<p class="card__tagline">' + esc(c.tagline) + "</p>" : "") +
      socials(c) +
      '<a class="btn btn--dark card__visit" href="' +
      esc(c.site) +
      '" target="_blank" rel="noopener">Visit</a>' +
      "</article>"
    );
  }

  function joinCard() {
    const subject = encodeURIComponent("Request to be listed on Petty Bestie");
    const body = encodeURIComponent(
      "Hi! I'd like to be added to the Petty Bestie directory.\n\nName:\nSpecialty:\nWebsite:\nInstagram / TikTok / YouTube:\nOne-line tagline:\n"
    );
    return (
      '<article class="card card--join">' +
      '<div class="card__avatar"><div class="card__monogram card__monogram--join" aria-hidden="true"><span>+</span></div></div>' +
      '<h3 class="card__name">Your name here?</h3>' +
      '<p class="card__specialty">Woman physician &amp; points creator</p>' +
      '<p class="card__tagline">This list is growing. Ask to be added and we’ll be in touch.</p>' +
      '<a class="btn btn--pink card__visit" href="mailto:' +
      esc(CONTACT_EMAIL) +
      "?subject=" +
      subject +
      "&body=" +
      body +
      '">Request to be listed</a>' +
      "</article>"
    );
  }

  function matches(c, q) {
    if (!q) return true;
    const hay = [c.name, c.handle, c.specialty, c.tagline, Object.keys(c.socials || {}).map((k) => LABELS[k]).join(" ")]
      .join(" ")
      .toLowerCase();
    return q.split(/\s+/).every((term) => hay.includes(term));
  }

  function render() {
    const q = (search && search.value || "").trim().toLowerCase();
    const list = CREATORS.filter((c) => matches(c, q));
    grid.innerHTML = list.map(card).join("") + (q ? "" : joinCard());
    if (emptyState) emptyState.hidden = list.length > 0 || !q;
    if (countEl) {
      countEl.textContent =
        CREATORS.length + (CREATORS.length === 1 ? " physician" : " physicians") + " and counting";
    }
  }

  if (search) search.addEventListener("input", render);
  render();

  /* Wire up every mailto CTA with the shared contact email. */
  document.querySelectorAll("[data-mailto]").forEach((a) => {
    const subject = encodeURIComponent(a.getAttribute("data-mailto") || "Hello from mamadocstravel.com");
    a.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject;
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
