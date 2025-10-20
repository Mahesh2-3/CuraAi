import {
  AiChatIcon,
  CoughIcon,
  DangerIcon,
  HospitalIcon,
} from "@/assets/react-icons";

export const conversation = [
  {
    role: "ai",
    message:
      "Hello! I’m your virtual health assistant. How can I help you today?",
  },
  {
    role: "user",
    message:
      "Hi, I’ve been having a sore throat and mild fever for the last two days.",
  },
  {
    role: "ai",
    message:
      "I see. Could you tell me if you’re experiencing any other symptoms — like cough, difficulty swallowing, or body aches?",
  },
  {
    role: "user",
    message:
      "Yeah, I have a bit of a dry cough and my throat feels irritated when I swallow.",
  },
  {
    role: "ai",
    message:
      "Got it. Have you noticed any white patches or swelling in your throat when you look in the mirror?",
  },
  {
    role: "user",
    message: "No, just redness.",
  },
  {
    role: "ai",
    message:
      "Understood. Based on what you’ve described, this could be a viral throat infection or mild pharyngitis, which usually improves in a few days with rest and hydration.",
  },
  {
    role: "user",
    message: "Should I take any medicine for it?",
  },
  {
    role: "ai",
    message:
      "You can take paracetamol (acetaminophen) for fever or throat pain if needed. Gargling with warm salt water and drinking plenty of fluids can also help. If the fever lasts more than 3 days, or you develop severe pain, white patches, or difficulty breathing, it’s best to see a doctor for an in-person examination and possible throat swab.",
  },
  {
    role: "user",
    message: "Okay, thank you. Can I drink cold water?",
  },
  {
    role: "ai",
    message:
      "It’s better to avoid very cold drinks right now — they can irritate your throat. Stick with warm or room-temperature fluids like herbal tea or warm water with honey.",
  },
  {
    role: "user",
    message: "Got it. Thanks for the advice!",
  },
  {
    role: "ai",
    message:
      "You’re welcome! Take care, rest well, and monitor your symptoms. If anything worsens, contact a healthcare provider.",
  },
];

export const msgStyles = "p-4 mt-3 rounded-lg max-w-[80%] w-fit";

export const sidebarOptions = [
  {
    label: "new chat",
    icon: AiChatIcon,
    link: "/chat",
  },
  {
    label: "Cough analyzer",
    icon: CoughIcon,
    link: "/cough-analyzer",
  },
  {
    label: "Diseases",
    icon: DangerIcon,
    link: "/diseases",
  },
  {
    label: "CareNearBy",
    icon: HospitalIcon,
    link: "/carenearby",
  },
];

export const history = [
  {
    title: "feeling little dizzy and also having headache with mild fever",
    chatId: "1",
  },
  {
    title: "i have been coughing a lot and having chest pain",
    chatId: "2",
  },
  {
    title: "i have a sore throat and runny nose",
    chatId: "3",
  },
  {
    title: "i have been experiencing stomach pain and nausea",
    chatId: "4",
  },
  {
    title: "i have a skin rash and itching",
    chatId: "5",
  },
  {
    title: "i have a sore throat and runny nose",
    chatId: "3",
  },
  {
    title: "i have been experiencing stomach pain and nausea",
    chatId: "4",
  },
  {
    title: "i have a skin rash and itching",
    chatId: "5",
  },
  {
    title: "i have a sore throat and runny nose",
    chatId: "3",
  },
  {
    title: "i have been experiencing stomach pain and nausea",
    chatId: "4",
  },
  {
    title: "i have a skin rash and itching",
    chatId: "5",
  },
  {
    title: "i have a sore throat and runny nose",
    chatId: "3",
  },
  {
    title: "i have been experiencing stomach pain and nausea",
    chatId: "4",
  },
  {
    title: "i have a skin rash and itching",
    chatId: "5",
  },
  {
    title: "i have a sore throat and runny nose",
    chatId: "3",
  },
  {
    title: "i have been experiencing stomach pain and nausea",
    chatId: "4",
  },
  {
    title: "i have a skin rash and itching",
    chatId: "5",
  },
];
