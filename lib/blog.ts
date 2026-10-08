export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  paragraphs: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "start-a-home-yoga-practice",
    title: "How to start a home yoga practice",
    excerpt:
      "A mat, twenty quiet minutes, and a plan you can repeat. Here is a simple way to begin without overthinking it.",
    date: "2026-09-02",
    paragraphs: [
      "You do not need a full studio to start. A clear patch of floor, a mat, and a time you can protect most days is enough.",
      "Begin with five sun salutations, or a slower seated sequence if your knees prefer it. Add one standing balance and a short rest in savasana. Keep the same order for two weeks so your body learns the shape of the practice.",
      "If something pinches, make it smaller. Bend the knees, use a cushion, or skip the pose. Consistency matters more than a perfect photograph.",
      "When you are ready for posture corrections and a plan built around your goal, book a trial class with Lakshya. Online works from home. In person is available across Delhi | NCR.",
    ],
  },
  {
    slug: "yoga-and-strength-together",
    title: "Why yoga and strength training belong together",
    excerpt:
      "Strength builds the muscle. Yoga keeps the joints honest. Used together, they make progress that lasts.",
    date: "2026-09-16",
    paragraphs: [
      "Lifting makes you stronger. It can also leave the hips, shoulders, and spine feeling stuck if nothing lengthens them afterwards.",
      "Yoga is not a replacement for strength work, and strength work is not a replacement for yoga. A squat pattern needs load. A tight hip flexor needs time on the mat. The useful plan uses both in the ratio your goal needs.",
      "For fat loss, that often means a brisk flow plus two or three strength sessions a week. For muscle, the weights lead and yoga is the recovery. For posture and calm, the asana practice leads and strength keeps the joints supported.",
      "Lakshya builds that mix into one plan, then adjusts it from the weekly check-in.",
    ],
  },
  {
    slug: "morning-pranayama",
    title: "A ten-minute morning breathing practice",
    excerpt:
      "Three simple breathing drills you can do before the day starts, seated, with no equipment.",
    date: "2026-09-28",
    paragraphs: [
      "Sit tall on a cushion or a chair. Let the shoulders drop and the belly stay soft. Two minutes of quiet breathing is the warm-up.",
      "Then try extended exhale: inhale for four counts, exhale for six. Ten rounds. If you feel light-headed, return to a normal breath.",
      "Finish with alternate-nostril breathing for two minutes, or simply sit and notice the breath if the nostrils feel blocked. End before you are bored. A short practice you repeat beats a long one you abandon.",
      "Breathing work pairs well with the first class of the day. Mention it when you book, and Lakshya can fold it into your plan.",
    ],
  },
];

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
