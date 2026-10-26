// Homepage film, in play order. Edit/reorder freely; `card` is the feature card surfaced at that beat.
// Unused clips (public/videos/06-gd.mp4) can be dropped in as another beat.

export const EMPLOYABILITY_SCORE = 86; // matches the score ring in 05-phone.mp4

export type Beat = {
  id: string;
  video: string;
  poster: string;
  card?: { kicker: string; title: string; body: string; href: string; cta: string };
};

const clip = (n: string) => ({ video: `/videos/${n}.mp4`, poster: `/videos/posters/${n}.jpg` });

export const BEATS: Beat[] = [
  { id: "door", ...clip("02-door") },
  {
    id: "classroom",
    ...clip("03-classroom"),
    card: {
      kicker: "Skill Pathways",
      title: "Lectures teach the syllabus. Pathways teach the job.",
      body: "A personalised roadmap from your course to the role you want, with the exact skills employers screen for.",
      href: "/features#skill-pathways",
      cta: "Explore Pathways",
    },
  },
  {
    id: "canteen",
    ...clip("04-canteen"),
    card: {
      kicker: "Skillcoins",
      title: "Learning that pays you back.",
      body: "Earn Skillcoins for every skill you build and challenge you beat. Learn with your friends, climb together.",
      href: "/features#skillcoins",
      cta: "See Skillcoins",
    },
  },
  {
    id: "phone",
    ...clip("05-phone"),
    card: {
      kicker: "MIRA + Employability Score",
      title: "Know exactly where you stand.",
      body: "MIRA, your AI career guide, measures your employability and tells you the next best move.",
      href: "/features#mira",
      cta: "Meet MIRA",
    },
  },
  {
    id: "interview",
    ...clip("07-interview"),
    card: {
      kicker: "Launchpad",
      title: "Walk into the interview ready.",
      body: "Practice real interviews, sharpen your resume and build proof of skill before it counts.",
      href: "/for-students",
      cta: "Start on Launchpad",
    },
  },
  {
    id: "office",
    ...clip("08-office"),
    card: {
      kicker: "For Colleges",
      title: "Turn graduates into hires.",
      body: "Assess every student's real employability and close the gap between CGPA and placement.",
      href: "/for-colleges",
      cta: "Partner with us",
    },
  },
];
