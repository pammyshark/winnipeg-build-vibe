# Winnipeg Build Vibe

Build a single-page website for BuildVibe, a free, hands-on AI building community in Winnipeg, Canada. Keep it to one page, with no backend, no login, and no extra pages.

BRAND & STYLE
- I've attached two logo versions as transparent PNGs:
  - Logo without tagline: the main logo. Use it in the header and footer.
  - Logo with "Build with AI" tagline: use it only inside the featured first-event card, since that event is our Build with AI workshop.
  Match the whole site's style to the logo's vibe.
- Background: a radial gradient starting at the top-left corner, from #000000 to #3533cd (radial-gradient(circle at 0% 0%, #000000, #3533cd)).
- Text: white #FFFFFF. Accent color for buttons, highlights, and key words: yellow #FFDE32.
- Bold, modern, energetic, minimal. Plenty of spacing. No stock photos, no robot or circuit imagery, no emojis.
- Fully responsive and mobile-friendly.

SECTIONS (in this order)

1. Header
Logo on the left, a yellow "Register" button on the right.

2. Hero
- Headline: "Build something real with AI."
- Subtext: "Free hands-on workshops in Winnipeg. No coding experience needed."
- Yellow button: "Join the first event" (opens the registration popup).

3. What is BuildVibe
"BuildVibe is a community for students, professionals, newcomers and aspiring founders who want to turn ideas into real, working products using AI. We learn by building, together."

4. First event (featured card)
- Show the "Build with AI" tagline logo in this card.
- Title: "BuildVibe: Build with AI"
- Description: "A hands-on workshop where you'll build your own portfolio, or a website for the business you're dreaming of, using AI. We'll finish with a Show & Tell where everyone demos what they built."
- Details: "Date: TBA · Venue: TBA, Winnipeg · Free · Lovable credits for every participant"
- Tags shown as small pills: "In person" · "Beginner-friendly" · "18+" · "Free"
- Yellow "Register" button (opens the popup).

5. What you'll walk away with
3 cards:
- "A live project you built yourself"
- "How to prompt AI to build for you"
- "A community of people who build"

6. Upcoming events
3 smaller cards, each with a "Coming soon" tag:
- "Build an AI Agent"
- "SME Build Night: for small and medium businesses"
- "Builder Networking Session"

7. Organizer (near the bottom)
- Section label: "Organizer"
- Circular photo (I've attached my photo).
- Name: "Pamela Mollinedo"
- Bio: "MMIT graduate student at the University of Winnipeg, instructor, and builder. I've taught hands-on Python and SQL to learners of all levels, and I'm part of Lovable's SheBuilds community. BuildVibe is my way of helping more people build with AI."
- LinkedIn button linking to https://www.linkedin.com/in/pamela-mollinedo/

8. Footer
Main logo, the text "BuildVibe@WPG · Workshops, build nights & builder meetups · Coming to more cities soon", and a LinkedIn link.

REGISTRATION POPUP
All "Register" and "Join" buttons open a small centered modal: "Registration opens soon! Follow along on LinkedIn for updates," with a yellow button linking to https://www.linkedin.com/in/pamela-mollinedo/ and an X to close.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/99bbe137-833c-4d84-af74-b7c86681f65d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
