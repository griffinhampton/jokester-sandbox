export const images = [
  "ChatGPT Image 3 мар. 2026 г., 12_16_20 1 (1).png",
  "ChatGPT Image 3 мар. 2026 г., 12_16_20 1.png",
  "ChatGPT Image 3 мар. 2026 г., 12_16_20 2 (1).png",
  "ChatGPT Image 3 мар. 2026 г., 12_16_20 2 (2).png",
  "ChatGPT Image 3 мар. 2026 г., 12_16_20 2 (3).png",
  "ChatGPT Image 3 мар. 2026 г., 12_16_20 2 (4).png",
  "ChatGPT Image 3 мар. 2026 г., 12_16_20 2.png",
  "ChatGPT Image 3 мар. 2026 г., 12_24_47 1.png",
  "ChatGPT Image 3 мар. 2026 г., 12_44_05 1 (1).png",
  "ChatGPT Image 3 мар. 2026 г., 12_44_05 1.png",
  "ChatGPT Image 3 мар. 2026 г., 12_44_05 2.png",
  "ChatGPT Image 3 мар. 2026 г., 12_44_05 3.png",
  "ChatGPT Image 3 мар. 2026 г., 12_44_05 4.png",
  "ChatGPT Image 3 мар. 2026 г., 13_14_56 1 (1).png",
  "ChatGPT Image 3 мар. 2026 г., 13_14_56 1.png",
  "ChatGPT Image 3 мар. 2026 г., 13_16_38 1 (1).png",
  "ChatGPT Image 3 мар. 2026 г., 13_16_38 1.png",
  "ChatGPT Image 3 мар. 2026 г., 13_35_39 1.png",
  "Image (10).png",
  "Image (11).png",
  "Image (12).png",
  "Image (8).png",
  "Image (9).png",
  "image 4.png",
  "image 5.png",
  "image 7.png",
];

export const getImg = (idx) => `/comedianpics/${images[idx % images.length]}`;

export const heroContent = {
  id: "hero-1",
  date: "Feb 15, 8:00 PM PST",
  title: "MIKE MORGAN",
  subtitle: "Live from The Comedy Store in Hollywood",
  price: "$9.99",
  image: "/comedianpics/main-hero.png"
};

export const hottestContent = [
  { id: "h-1", title: "Emotionally Available", author: "Bethany Evans", number: 1, image: getImg(0) },
  { id: "h-2", title: "Laughing Through the Chaos", author: "Tim Hawkins", number: 2, image: getImg(1) },
  { id: "h-3", title: "Still Not My Final Form", author: "Angel Johnston", number: 3, image: getImg(2) },
  { id: "h-4", title: "Weekend, On Purpose", author: "Luke Crypt", number: 4, image: getImg(3) },
  { id: "h-5", title: "I Swear I'm Blessed", author: "Walter Jenkinsli", number: 5, image: getImg(4) },
];

export const liveUpcomingContent = [
  { id: "l-1", title: "Mostly Fine", author: "Katelyn Elias", badge: null, image: getImg(5) },
  { id: "l-2", title: "Good Point, Actually", author: "Gwendolyn Barnes", badge: "New", image: getImg(6) },
  { id: "l-3", title: "Will Adams", author: "Clayton Rhodes", badge: "Tomorrow", image: getImg(7) },
  { id: "l-4", title: "Average (Good), But Optimi...", author: "Patrick Kansas", badge: "Feb 5", image: getImg(8) },
  { id: "l-5", title: "Just Me Wrong", author: "Colton Hardy", badge: "Feb 6", image: getImg(9) },
  { id: "l-6", title: "Optimistic", author: "Katelyn Elias", badge: null, image: getImg(10) },
];

export const newestContent = [
  { id: "n-1", title: "No Context Needed", author: "Ari Shaffir", badge: "New", image: getImg(11) },
  { id: "n-2", title: "Tell Somewhat", author: "Phil Taj", badge: null, image: getImg(12) },
  { id: "n-3", title: "Unashamed and Loud", author: "Stephanie Springs", badge: null, image: getImg(13) },
  { id: "n-4", title: "Trying To Be Serious", author: "Jeff Dye", badge: null, image: getImg(14) },
  { id: "n-5", title: "Frequently Speaking", author: "Hassan Singh", badge: null, image: getImg(15) },
];

export const likedContent = [
  { id: "k-1", title: "Anyway, We Can't Have Nice Things", author: "Scott Jones", image: getImg(16) },
  { id: "k-2", title: "Culturally Confused", author: "Starring Summers", image: getImg(17) },
  { id: "k-3", title: "We Need to Talk", author: "Joe Dombrowski", image: getImg(18) },
  { id: "k-4", title: "Still Searching", author: "Frank Holmes", image: getImg(19) },
  { id: "k-5", title: "We're Having a Good Time", author: "Emily Solo", image: getImg(20) },
];

export const featuredComedians = [
  { id: "f-1", name: "Lucas James", image: getImg(21) },
  { id: "f-2", name: "Tim Hawkins", image: getImg(22) },
  { id: "f-3", name: "Alani Panissen", image: getImg(23) },
  { id: "f-4", name: "Luke Knight", image: getImg(24) },
  { id: "f-5", name: "William Johnson", image: getImg(25) },
  { id: "f-6", name: "Noreen Lewis", image: getImg(0) },
  { id: "f-7", name: "Alexandra Jones", image: getImg(1) },
  { id: "f-8", name: "Julian Mason", image: getImg(2) },
  { id: "f-9", name: "William Johnson", image: getImg(3) },
];

const allContent = [...hottestContent, ...liveUpcomingContent, ...newestContent, ...likedContent, heroContent];
export const getItemById = (id) => allContent.find(item => item.id === id);
