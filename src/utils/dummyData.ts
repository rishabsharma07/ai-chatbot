
import { Conversation, SuggestedQuestion } from "@/types/types";

export const conversations: Conversation[] = [
  {
    id: "1",
    customer: {
      name: "Luis Easton",
      company: "Github",
      email: "luis@github.com",
    },
    lastMessage: "I bought a product from your store in November as a Christmas gift",
    lastMessageTime: "1min",
    unread: true,
    priority: "medium",
    messages: [
      {
        id: "m1",
        sender: "user",
        content: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
        timestamp: "1min",
      },
      {
        id: "m2",
        sender: "agent",
        content: "Let me just look into this for you, Luis.",
        timestamp: "1min",
        seen: true,
      },
    ],
  },
  {
    id: "2",
    customer: {
      name: "Ivan",
      company: "Nike",
    },
    lastMessage: "Hi there, I have a question about my order",
    lastMessageTime: "30m",
    unread: true,
    priority: "high",
    messages: [
      {
        id: "m1",
        sender: "user",
        content: "Hi there, I have a question about my order",
        timestamp: "30m",
      },
    ],
  },
  {
    id: "3",
    customer: {
      name: "Lead from New York",
    },
    lastMessage: "Good morning, let me know about your services",
    lastMessageTime: "40m",
    unread: false,
    messages: [
      {
        id: "m1",
        sender: "user",
        content: "Good morning, let me know about your services",
        timestamp: "40m",
      },
    ],
  },
  {
    id: "4",
    customer: {
      name: "Booking API problems",
      company: "Small Crafts",
    },
    lastMessage: "Bug report",
    lastMessageTime: "45m",
    unread: false,
    messages: [
      {
        id: "m1",
        sender: "user",
        content: "Bug report",
        timestamp: "45m",
      },
    ],
  },
  {
    id: "5",
    customer: {
      name: "Miracle",
      company: "Exemplary Bank",
    },
    lastMessage: "Hey there, I'm here to discuss",
    lastMessageTime: "45m",
    unread: false,
    messages: [
      {
        id: "m1",
        sender: "user",
        content: "Hey there, I'm here to discuss",
        timestamp: "45m",
      },
    ],
  },
  {
    id: "6",
    customer: {
      name: "Nikola Tesla",
      email: "nikola@tesla.com",
    },
    lastMessage: "I placed the order over 60 days ago",
    lastMessageTime: "21m",
    unread: false,
    messages: [
      {
        id: "m1",
        sender: "agent",
        content: "Thanks, passing you to the right team now.",
        timestamp: "22m",
      },
      {
        id: "m2",
        sender: "agent",
        content: "Let me just look into this for you, Nikola.",
        timestamp: "21m",
      },
      {
        id: "m3",
        sender: "agent",
        content: "We understand if your purchase didn't quite meet your expectations. To help you with a refund, please provide your order ID and proof of purchase.\n\nJust a heads-up:\nWe can only refund orders from the last 60 days.\nYour item must meet our return condition requirements.\n\nOnce confirmed, I'll send you a returns QR code for easy processing.\n\nThanks for your cooperation!",
        timestamp: "21m",
        seen: true
      },
      {
        id: "m4",
        sender: "user",
        content: "I placed the order over 60 days ago 😔. Could you make an exception, please?",
        timestamp: "21m",
      },
    ],
  },
];

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    id: "q1",
    text: "What if the order was over 60 days ago?"
  },
  {
    id: "q2",
    text: "How do I get a refund?"
  },
  {
    id: "q3",
    text: "Refund for an order placed by mistake"
  },
  {
    id: "q4",
    text: "Refund for an unwanted gift"
  }
];

export const finAiResponse = `We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.

To assist you with your refund request, could you please provide your order ID and proof of purchase.

Please note:
We can only refund orders placed within the last 60 days, and your item must meet our requirements for condition to be returned. Please check when you placed your order before proceeding.

Once I've checked these details, if everything looks OK, I will send a returns QR code which you can use to post the item back to us. Your refund will be automatically issued once you put it in the post.`;

export const relevantSources = [
  "Getting a refund",
  "Refund for an order placed by mistake",
  "Refund for an unwanted gift"
];
