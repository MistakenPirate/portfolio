import { Icons } from "@/components/icons";

export const AUX_DATA = {
  sections: [
    {
      title: "Hackathons",
      description: "Events where I collaborated with others to build innovative solutions.",
      items: [
        {
          title: "BuildSpace N&W S3",
          description: "Built a full stack web3 app with Next.js and Solana",
          date: "2023",
          image: "/buildspace.jpg",
          links: [
            {
              label: "Project",
              href: "https://buildspace.so",
              icon: "globe" as keyof typeof Icons
            }
          ]
        }
      ]
    },
    {
      title: "Reading List",
      description: "Books that have influenced my thinking and perspective.",
      items: [
        {
          title: "Atomic Habits",
          description: "An easy and proven way to build good habits and break bad ones.",
          image: "/atomic.png",
          links: [
            {
              label: "Goodreads",
              href: "https://www.goodreads.com/book/show/40121378-atomic-habits",
              icon: "globe" as keyof typeof Icons
            }
          ]
        }
      ]
    },
    {
      title: "Anime Collection",
      description: "Some of my favorite anime series and movies.",
      items: [
        {
          title: "One Piece",
          description: "A story about freedom, dreams, and the bonds of friendship.",
          image: "/onepiece.jpg",
          links: [
            {
              label: "MAL",
              href: "https://myanimelist.net/anime/21/One_Piece",
              icon: "globe" as keyof typeof Icons
            }
          ]
        }
      ]
    },
    {
      title: "Movie Picks",
      description: "Films that left a lasting impression.",
      items: [
        {
          title: "Interstellar",
          description: "A journey through space and time, exploring the power of love and human perseverance.",
          date: "2014",
          links: [
            {
              label: "IMDb",
              href: "https://www.imdb.com/title/tt0816692/",
              icon: "globe" as keyof typeof Icons
            }
          ]
        }
      ]
    },
    {
      title: "Music Favorites",
      description: "Songs and artists that inspire me.",
      items: [
        {
          title: "Pink Floyd",
          description: "Psychedelic rock band known for their progressive sound and philosophical lyrics.",
          links: [
            {
              label: "Spotify",
              href: "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9",
              icon: "globe" as keyof typeof Icons
            }
          ]
        }
      ]
    }
  ]
};
