"use client";
import Announcements from "@/components/u-dashboard/Announcements";
import AttendanceChart from "@/components/u-dashboard/AttendanceChart";
import CountChart from "@/components/u-dashboard/CountChart";
import EventCalendar from "@/components/u-dashboard/EventCalendar";
import FinanceChart from "@/components/u-dashboard/FinanceChart";
import UserCard from "@/components/u-dashboard/UserCard";
import { useMessageStore } from "@/lib/stores/messageStore";
import { useTourBookingStore } from "@/lib/stores/tourBookingStore";

// import { useMessageStore } from "@/lib/stores/messageStore";
import { useEffect } from "react";

const AdminPage = () => {
  const { fetchMessages, messages } = useMessageStore();
  const { fetchTourBookings, tourBookings } = useTourBookingStore();

  useEffect(() => {
    fetchMessages();
    fetchTourBookings()

  }, [fetchMessages, fetchTourBookings]);

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="booking" num={tourBookings.length || 0} />
          <UserCard type="message" num={messages.length || 0} />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart title="Visitors" />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
