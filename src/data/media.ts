// Centralised media library. Replace any URL with a licensed or client-supplied asset
// (ideally optimised WebP/AVIF served from /public/images). Video slots are empty until
// licensed footage is supplied — components fall back to the poster image with a slow
// cinematic zoom, so nothing breaks while they are blank.
export const media = {
  images: {
    hero: "/ttc-pause-reflect-choose.png",
    intro: "/ttc-happiness-is-living.png",
    innerWorld: "/9f4f4700-8ff1-4484-bdd3-7eacb4ced3bb.jpg",
    aware: "/4ffd1719-2f3c-4d90-bdee-35819197e174.jpg",
    align: "/2efb5cc3-8065-4f1f-a645-c67a3408260e.jpg",
    awaken: "/e7701f7e-607c-45d7-b7cd-df105322da90.jpg",
    achieve: "/cf12ebba-cf31-444e-aa43-a5b07343faff.jpg",
    happiness: "/4a2341a3-9a33-46ae-989a-2888b4d90319.jpg",
    mindfulness: "/396820ef-6b25-4003-b148-049d95409201.jpg",
    personal: "/4e950fb9-9b07-414f-b594-a65872bc99c5.jpg",
    executive: "/56f2bc1e-9c55-4ba7-9f35-98cce8bbbb5f.jpg",
    videoBreak: "/fdd577a7-f9d3-4a6c-be6c-4f8bf9d6f302.jpg",
    reflection: "/f310a94f-d6ae-4ce9-be51-02f1d96bee79.jpg",
    finalCta: "/c1781924-95e9-4a12-bfa6-83f6c753be48.jpg",
    conversation: "/737cb192-8ea0-4db1-88c8-702d0892e802.jpg"
  },
  videos: {
    hero: '', // e.g. '/videos/hero-forest.mp4'
    videoBreak: '', // e.g. '/videos/misty-valley.mp4'
    finalCta: ''
  }
};