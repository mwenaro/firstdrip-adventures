import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { HttpService } from "../HttpService";

// Initialize HttpService
const httpService = new HttpService("/api/v1/tour-booking");
// const httpService = new HttpService("https://aburayyanacademy.com/api/v1/TourBooking");

// Define the TourBooking Type
interface TourBooking {
  _id: string;
  name: string;
  age: number;
  classId: string;
  marks?: number[]; 
}

// Zustand Store Interface
interface TourBookingState {
  tourBookings: TourBooking[];
  loading: boolean;
  error: string | null;

  fetchTourBookings: () => Promise<void>;
  addTourBooking: (tourBooking: TourBooking) => Promise<void>;
  updateTourBooking: (id: string, updatedData: Partial<TourBooking>) => Promise<void>;
  deleteTourBooking: (id: string) => Promise<void>;
  reset: () => void;
}

// Create the Zustand Store
export const useTourBookingStore = create<TourBookingState>()(
  devtools(
    persist(
      (set) => ({
        tourBookings: [],
        loading: false,
        error: null,

        // Fetch TourBookings from API
        fetchTourBookings: async () => {
          set({ loading: true, error: null });
          try {
            const data = await httpService.get<TourBooking[]>("");
            set({ tourBookings: data, loading: false });
          } catch (err: any) {
            set({
              error: err.tourBooking || "Failed to fetch TourBookings",
              loading: false,
            });
          }
        },

        // Add new TourBooking
        addTourBooking: async (tourBooking) => {
          try {
            const newTourBooking = await httpService.post<TourBooking>("", tourBooking);
            set((state) => ({ tourBookings: [...state.tourBookings, newTourBooking] }));
          } catch (err: any) {
            set({ error: err.TourBooking || "Failed to add TourBooking" });
          }
        },

        // Update existing TourBooking
        updateTourBooking: async (id, updatedData) => {
          try {
            await httpService.put<TourBooking>(id, updatedData);
            set((state) => ({
              tourBookings: state.tourBookings.map((s) =>
                s._id === id ? { ...s, ...updatedData } : s
              ),
            }));
          } catch (err: any) {
            set({ error: err.tourBooking || "Failed to update TourBooking" });
          }
        },

        // Delete TourBooking
        deleteTourBooking: async (id) => {
          try {
            await httpService.delete(id);
            set((state) => ({
              tourBookings: state.tourBookings.filter((s) => s._id !== id),
            }));
          } catch (err: any) {
            set({ error: err.tourBooking || "Failed to delete TourBooking" });
          }
        },

        // Reset store
        reset: () => set({ tourBookings: [], loading: false, error: null }),
      }),
      { name: "TourBooking-store" }
    )
  )
);
