import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { HttpService } from "../HttpService";

// Initialize HttpService
const httpService = new HttpService("/api/v1/contact-form");
// const httpService = new HttpService("https://aburayyanacademy.com/api/v1/Message");

// Define the Message Type
interface Message {
  _id: string;
  name: string;
  age: number;
  classId: string;
  marks?: number[]; 
}

// Zustand Store Interface
interface MessageState {
  messages: Message[];
  loading: boolean;
  error: string | null;

  fetchMessages: () => Promise<void>;
  addMessage: (message: Message) => Promise<void>;
  updateMessage: (id: string, updatedData: Partial<Message>) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;
  reset: () => void;
}

// Create the Zustand Store
export const useMessageStore = create<MessageState>()(
  devtools(
    persist(
      (set) => ({
        messages: [],
        loading: false,
        error: null,

        // Fetch Messages from API
        fetchMessages: async () => {
          set({ loading: true, error: null });
          try {
            const data = await httpService.get<Message[]>("");
            set({ messages: data, loading: false });
          } catch (err: any) {
            set({
              error: err.message || "Failed to fetch Messages",
              loading: false,
            });
          }
        },

        // Add new Message
        addMessage: async (message) => {
          try {
            const newMessage = await httpService.post<Message>("", message);
            set((state) => ({ messages: [...state.messages, newMessage] }));
          } catch (err: any) {
            set({ error: err.message || "Failed to add Message" });
          }
        },

        // Update existing Message
        updateMessage: async (id, updatedData) => {
          try {
            await httpService.put<Message>(id, updatedData);
            set((state) => ({
              messages: state.messages.map((s) =>
                s._id === id ? { ...s, ...updatedData } : s
              ),
            }));
          } catch (err: any) {
            set({ error: err.message || "Failed to update Message" });
          }
        },

        // Delete Message
        deleteMessage: async (id) => {
          try {
            await httpService.delete(id);
            set((state) => ({
              messages: state.messages.filter((s) => s._id !== id),
            }));
          } catch (err: any) {
            set({ error: err.message || "Failed to delete Message" });
          }
        },

        // Reset store
        reset: () => set({ messages: [], loading: false, error: null }),
      }),
      { name: "Message-store" }
    )
  )
);
