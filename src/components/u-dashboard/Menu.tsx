import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/u-dashboard/home.png",
        label: "Dashboard",
        href: "/dashboard/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/u-dashboard/teacher.png",
        label: "Visitors",
        href: "/dashboard/list/visitors",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/u-dashboard/teacher.png",
        label: "Bookings",
        href: "/dashboard/list/bookings",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/u-dashboard/teacher.png",
        label: "Payments",
        href: "/dashboard/list/payments",
        visible: ["admin", "teacher"],
      },
      // {
      //   icon: "/u-dashboard/student.png",
      //   label: "Students",
      //   href: "/dashboard/list/students",
      //   visible: ["admin", "teacher"],
      // },
      // {
      //   icon: "/u-dashboard/parent.png",
      //   label: "Parents",
      //   href: "/dashboard/list/parents",
      //   visible: ["admin", "teacher"],
      // },
      // {
      //   icon: "/u-dashboard/subject.png",
      //   label: "Subjects",
      //   href: "/dashboard/list/subjects",
      //   visible: ["admin"],
      // },
      // {
      //   icon: "/u-dashboard/class.png",
      //   label: "Classes",
      //   href: "/dashboard/list/classes",
      //   visible: ["admin", "teacher"],
      // },
      // {
      //   icon: "/u-dashboard/lesson.png",
      //   label: "Lessons",
      //   href: "/dashboard/list/lessons",
      //   visible: ["admin", "teacher"],
      // },
      // {
      //   icon: "/u-dashboard/exam.png",
      //   label: "Exams",
      //   href: "/dashboard/list/exams",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/u-dashboard/assignment.png",
      //   label: "Assignments",
      //   href: "/dashboard/list/assignments",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/u-dashboard/result.png",
      //   label: "Results",
      //   href: "/dashboard/list/results",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/u-dashboard/attendance.png",
      //   label: "Attendance",
      //   href: "/dashboard/list/attendance",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/u-dashboard/calendar.png",
      //   label: "Events",
      //   href: "/dashboard/list/events",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/u-dashboard/message.png",
      //   label: "Messages",
      //   href: "/dashboard/list/messages",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/u-dashboard/announcement.png",
      //   label: "Announcements",
      //   href: "/dashboard/list/announcements",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/u-dashboard/profile.png",
        label: "Profile",
        href: "/dashboard/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/u-dashboard/setting.png",
        label: "Settings",
        href: "/dashboard/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/u-dashboard/logout.png",
        label: "Logout",
        href: "/dashboard/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
