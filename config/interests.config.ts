/**
 * Interests Configuration
 *
 * The human side. One entry may use a Spotify playlist embed instead of an
 * image by providing `spotifyEmbed`.
 */

export interface InterestItem {
  category: string;
  title: string;
  description?: string;
  image?: string;
  link?: string;
  // Spotify playlist embed URL (overrides image card)
  spotifyEmbed?: string;
}

export const interestsConfig = {
  title: "Beyond the Terminal",
  items: [
    {
      category: "Media",
      title: "Anime & Manga",
      description: "Avid anime watcher, always hunting for the next great manga.",
      image: "/gg.jpg",
      link: "https://anilist.co/user/somba/animelist",
    },
    {
      category: "Sports",
      title: "Soccer",
      description:
        "Captained my school and university teams. Die-hard Real Madrid fan.",
      image: "/win.jpg",
      link: "https://www.instagram.com/mujfootball/",
    },
    {
      category: "Music",
      title: "Lofi & House for deep work",
      spotifyEmbed:
        "https://open.spotify.com/embed/playlist/1YolcgxPryjALXCWzyzjK9?utm_source=generator",
      link: "https://open.spotify.com/playlist/1YolcgxPryjALXCWzyzjK9",
      image: "/fred.jpg",
    },
    {
      category: "Code",
      title: "Hackathons",
      description:
        "Active hackathon competitor - placed 1st in a Data Mining hackathon of 30+ teams.",
      image: "/hack.jpg",
      link: "https://www.linkedin.com/posts/activity-7318096691297955841-JNkH",
    },
  ] as InterestItem[],
};

export type InterestsConfig = typeof interestsConfig;
