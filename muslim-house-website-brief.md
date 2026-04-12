# Muslim House Inc. — Website Design Brief
> For use with Claude Code: Clone icpcni.org structure, customize for The Muslim House, add modern Islamic design + animations.

---

## 1. Organization Profile

| Field | Details |
|-------|---------|
| **Name** | The Muslim House Inc. |
| **Type** | Nonprofit Religious Organization (church exemption) |
| **EIN** | 43-2094480 |
| **Address** | 804 Martin Luther King Ave, Flint, MI 48503 |
| **Phone** | (810) 513-5422 |
| **Current Website** | TheMuslimHouse.com |
| **Facebook** | https://www.facebook.com/The-Muslim-House-148159981880787/ |
| **Rating** | 4.0 stars / 94% recommend (22 reviews) |

---

## 2. History & Founding Story

### Origins (Early 1980s)
- Flint's Orthodox Muslim community had no dedicated place to worship
- Nation of Islam was the largest Muslim organization in Flint at the time
- NOI's exclusionary ideology toward white/non-Black Muslims caused a community rift
- Displaced Muslims began praying in Hurley Hospital's chapel and private homes

### The Split (1995)
- In 1985, Flint Muslims collectively purchased the former Cabana Club on Dyewood Drive
- In 1995, the Islamic Center of Flint (ICF) officially opened on Corunna Road in Swartz Creek — 20–30 min from Flint
- African American Muslims in Flint chose NOT to make the long commute
- **Imam Hanafi Abdul-Malik:** *"Why should we have to go way out there when there are so many Muslim people in Flint?"*

### Founding The Muslim House (1995)
- That same year (1995), community members purchased an old **halfway house** at the edge of downtown Flint
- The building was in complete disrepair — *"you could step inside, look up and see the stars"*
- Members used **bedsheets as walls** and rebuilt the space themselves
- **Imam Malik personally helped build the prayer rooms**
- Has been operating continuously for **~30 years**

---

## 3. Leadership

### Imam Hanafi Abdul-Malik
- Founder and spiritual leader of The Muslim House
- Has led the masjid since its founding in 1995
- Known for his welcoming, inclusive approach to Islam
- Core belief: *"There is no discretion concerning the value of a person based on their ethnicity. Islam does not acknowledge that."*
- Quote to a new visitor: *"Brother, pull back and rest your camel."*

---

## 4. Services & Programs

### Worship
- 5 daily prayers (Salat) — offered every day
- Jumu'ah (Friday congregational prayer)
- Islamic teachings and post-prayer discussions

### Community Outreach
- Food drives
- Clothing drives
- Water distribution (including collaboration with Flint Islamic Center)
- Counseling services
- Temporary lodging for travelers/newcomers (includes food, restroom, laundry access)

### Current Prayer Times (Flint, MI — approximate, should use live API)
| Prayer | Time |
|--------|------|
| Fajr | 6:29 AM |
| Sunrise | 7:47 AM |
| Dhuhr | 1:44 PM |
| Asr | 5:02 PM |
| Maghrib | 7:41 PM |
| Isha | 8:59 PM |

> **Note:** Integrate live prayer times via [Aladhan API](https://aladhan.com/prayer-times-api) or [IslamicFinder](https://www.islamicfinder.org) for accuracy.

---

## 5. Location & Accessibility

- **Intersection:** Martin Luther King Ave & 5th Ave, Flint MI
- Near **I-475** (easy highway access)
- Near **Hurley Hospital**
- Near **University of Michigan–Flint**
- Accessible by bus
- **Wheelchair-accessible parking** available
- Serves as a gateway to north Flint neighborhoods

---

## 6. Community Identity & Voice

Key quotes to use in website copy:

> *"A beacon of light where there is not a lot of light."* — Sa'eed Littlejohn, 7-year member

> *"We love the people around here... there is just a system of respect and compassion that's been implemented here."* — Sa'eed Littlejohn

> *"It's a landmark and a safe space not only for Muslims but for anyone in the community who is in need."*

> *"You need some water? Here you go. You need a dollar? Here you go. Are you passing out food? Yes."*

**Brand personality:** Humble, inclusive, community-rooted, accessible, spiritually grounded, historically significant

---

## 7. Website Structure (Clone from icpcni.org, Customize for Muslim House)

### Pages / Sections

```
1. HOME (Hero + Prayer Times + Quick Links)
2. ABOUT
   - Our Story
   - Imam Bio
   - Mission & Values
3. SERVICES
   - Daily Prayers
   - Community Programs
   - Traveler Support
4. EVENTS
   - Upcoming Events
   - Jumu'ah Schedule
   - Ramadan Calendar
5. DONATE
   - Sadaqah
   - Zakat
   - General Fund
6. VISIT US
   - Map / Directions
   - Hours
   - Parking
7. CONTACT
   - Contact Form
   - Phone / Address
```

---

## 8. Design Specifications

### Color Palette
```css
--primary-green:   #1B4332;   /* Deep Islamic emerald */
--accent-gold:     #C9A84C;   /* Warm gold */
--light-gold:      #F4E4BA;   /* Soft parchment */
--off-white:       #F8F5F0;   /* Warm background */
--text-dark:       #1A1A1A;
--text-muted:      #6B6B6B;
```

### Typography
- **Headings:** Playfair Display or Cormorant Garamond (elegant, serif)
- **Body:** Inter or Lato (clean, readable)
- **Arabic accents:** Amiri or Scheherazade New (Google Fonts)

### Animations & Modern Enhancements
- [ ] **Islamic geometric pattern** SVG background (animated, subtle parallax)
- [ ] **Hero section** with parallax scrolling + fade-in text
- [ ] **Prayer times countdown** ticker (live, auto-updates)
- [ ] **Scroll-triggered section reveals** (fade up on scroll)
- [ ] **Arabic calligraphy dividers** between sections
- [ ] **Smooth scroll** navigation
- [ ] **Dark / Light mode toggle**
- [ ] **Hover micro-animations** on cards and buttons
- [ ] **Mobile-first responsive** layout
- [ ] **GSAP or Framer Motion** for animation library (if React); or **AOS.js** (if vanilla HTML)

### Key UI Components
- Sticky header with prayer time mini-widget
- Hero: Full-width with community imagery + bismillah opener
- Prayer times card grid (with live countdown to next prayer)
- "Our Story" timeline section
- Services icon cards
- Donation CTA section with progress bar (optional)
- Google Maps embed
- Footer with quick links + social + contact

---

## 9. Technical Notes for Claude Code

### Stack Recommendation
- **HTML/CSS/JS** (static, easy to deploy) — OR —
- **React + Vite** (if interactivity/prayer API integration needed)

### External APIs
- **Prayer Times:** `https://api.aladhan.com/v1/timingsByCity?city=Flint&country=US&method=2`
- **Maps Embed:** Google Maps Embed API (804 MLK Ave, Flint MI 48503)

### Reference Site to Clone
- **icpcni.org** — Study its nav structure, section layout, hero pattern, and content hierarchy
- Then replace all content with Muslim House data from this brief
- Upgrade visual design with the specs above

### Assets Needed (Gather Separately)
- [ ] Photos of the masjid interior/exterior
- [ ] Photo of Imam Hanafi Abdul-Malik
- [ ] Community event photos (food drives, water drives, prayer sessions)
- [ ] Logo (if exists) or create new one with crescent + house motif

---

## 10. SEO & Meta Tags

```html
<title>The Muslim House | Masjid in Flint, Michigan</title>
<meta name="description" content="The Muslim House Inc. — A masjid and community center in Flint, MI serving the Muslim community since 1995. Daily prayers, food drives, counseling, and more.">
<meta name="keywords" content="Muslim House Flint, Masjid Flint Michigan, Islamic Center Flint, mosque Flint MI, Imam Hanafi Abdul-Malik">
```

---

## 11. Donation / CTA Copy Suggestions

- *"Support the House That Serves Flint"*
- *"Your sadaqah keeps the light on in north Flint"*
- *"Help us feed, clothe, and shelter our neighbors"*
- *"Whoever builds a masjid for Allah, Allah will build for him a house in Jannah — Sahih Muslim"*

---

*Research compiled April 2026. Sources: Flint Beat (Oct 2021), HalalTrip, PraySalat, Charity Navigator, Facebook.*
