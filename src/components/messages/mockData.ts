
// Mock data for users
export const mockUsers = [
  { id: "1", name: "Alex Johnson", avatar: "/placeholder.svg", status: "online" },
  { id: "2", name: "Morgan Smith", avatar: "/placeholder.svg", status: "offline" },
  { id: "3", name: "Jordan Taylor", avatar: "/placeholder.svg", status: "online" },
  { id: "4", name: "Casey Brown", avatar: "/placeholder.svg", status: "offline" },
  { id: "5", name: "Riley Davis", avatar: "/placeholder.svg", status: "online" },
];

// Mock data for conversations
export const mockConversations = [
  {
    id: "1",
    user: mockUsers[0],
    lastMessage: "Hey, how's it going?",
    timestamp: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    user: mockUsers[1],
    lastMessage: "Did you see the latest post?",
    timestamp: "Yesterday",
    unread: 0,
  },
  {
    id: "3",
    user: mockUsers[2],
    lastMessage: "Let's meet up tomorrow",
    timestamp: "Wed",
    unread: 0,
  },
  {
    id: "4",
    user: mockUsers[3],
    lastMessage: "Thanks for your help!",
    timestamp: "Mon",
    unread: 0,
  },
  {
    id: "5",
    user: mockUsers[4],
    lastMessage: "I'll check it out later",
    timestamp: "May 10",
    unread: 0,
  },
];
