
// Mock data for different topics with verification examples
export const mockPostsByTopic = {
  stocks: [{
    id: "s1",
    author: {
      id: "user1",
      name: "James Mwangi",
      username: "jamesmwangi",
      avatar: "/placeholder.svg"
    },
    content: "Safaricom shares are up 2.3% today following the announcement of their new mobile banking initiative. This could be a game changer for their fintech division.",
    topic: "Investments",
    createdAt: new Date(Date.now() - 1000000),
    likes: 34,
    comments: 12,
    shares: 5,
    isVerified: true
  }, {
    id: "s2",
    author: {
      id: "user4",
      name: "Peter Njoroge",
      username: "pnjoroge",
      avatar: "/placeholder.svg"
    },
    content: "What are your thoughts on KCB's new rights issue? I'm considering participating but want to hear from others who follow banking stocks closely.",
    topic: "Market News",
    createdAt: new Date(Date.now() - 8000000),
    likes: 21,
    comments: 18,
    shares: 2,
    isVerified: false
  }],
  banks: [{
    id: "b1",
    author: {
      id: "user2",
      name: "Sarah Kamau",
      username: "sarahk",
      avatar: "/placeholder.svg"
    },
    content: "Equity Bank has just announced a new SME loan package with reduced interest rates. This could be great for small business owners looking to scale.",
    topic: "Financial Education",
    createdAt: new Date(Date.now() - 3000000),
    likes: 27,
    comments: 9,
    shares: 6,
    isVerified: true
  }],
  crypto: [{
    id: "c1",
    author: {
      id: "user5",
      name: "David Mutua",
      username: "davemutua",
      avatar: "/placeholder.svg"
    },
    content: "With the new Central Bank directive on cryptocurrency, what's everyone's take on the future of Bitcoin and other cryptocurrencies in Kenya?",
    topic: "Cryptocurrency",
    createdAt: new Date(Date.now() - 4000000),
    likes: 45,
    comments: 32,
    shares: 7,
    isVerified: false
  }],
  default: []
};
