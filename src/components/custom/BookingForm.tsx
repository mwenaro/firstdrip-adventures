"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingFormData } from "@/schemas/bookingSchema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  Calendar,
  User,
  Mail,
  Info,
  Phone,
  Globe,
  User as UserIcon,
  Clock,
} from "lucide-react";

import { TouristDestination } from "@/data/touristDestinations";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countriesList as countries } from "@/data/countryList";
import { Textarea } from "@/components/ui/textarea";

export interface BookingFormProps {
  destination?: TouristDestination;
}

export const BookingForm: React.FC<BookingFormProps> = ({ destination }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      gender: "",
      tel: "",
      citizenship: "",
      travelDate: new Date(),
      numOfDays: 0,
      email: "",
      specialRequest: "",
    },
  });

  // const onSubmit = (data: BookingFormData) => {
  const onSubmit = async (data: BookingFormData) => {
    const result = await Swal.fire({
      title: "Confirm Booking",
      html: `
        <p><strong>Destination:</strong> ${destination?.name || "N/A"}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Telephone:</strong> ${data.tel}</p>
        <p><strong>Citizenship:</strong> ${data.citizenship}</p>
        <p><strong>Date of Travel:</strong> ${data.travelDate.toLocaleDateString()}</p>
        <p><strong>No. of Days:</strong> ${data.numOfDays}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>More Info:</strong> ${data.specialRequest || "N/A"}</p>
      `,
      icon: "success",
      // confirmButtonText: "OK",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch("/api/v1/tour-booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Failed to submit booking");

        Swal.fire({
          title: "Success!",
          text: "Your booking has been submitted.",
          icon: "success",
        });
      } catch (error: any) {
        console.log(error.message);
        Swal.fire({
          title: "Error",
          text: "There was a problem submitting your booking. Please try again.",
          icon: "error",
        });
      }
    }
  };

  // };

  return (
    <>
      <MagicCard className="max-w-lg mx-auto my-10 flex flex-col">
        <Card className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full ">
          <CardHeader>
            <CardTitle className="text-2xl font-bold  gap-2 my-2 text-center underline">
              {destination?.name || "Book Your Safari Here" || "Book Your Trip"}
            </CardTitle>
            {/* <p className="text-sm text-gray-600">
              {destination?.location || "Select a destination"}
            </p> */}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <UserIcon className="w-4 h-4" />
                Full Name
              </label>
              <Input
                type="text"
                {...register("name")}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <User className="w-4 h-4" />
                Gender
              </label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger aria-label="Gender">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      {/* <SelectItem value="notSay">Not Say</SelectItem> */}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && (
                <span className="text-sm text-red-500">
                  {errors.gender.message}
                </span>
              )}
            </div>

            {/* Telephone */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Phone className="w-4 h-4" />
                Telephone
              </label>
              <Controller
                name="tel"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              {errors.tel && (
                <span className="text-sm text-red-500">
                  {errors.tel.message}
                </span>
              )}
            </div>

            {/* Citizenship */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Globe className="w-4 h-4" />
                Citizenship
              </label>
              <Controller
                name="citizenship"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger aria-label="Citizenship">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(countries).map(([code, name]) => (
                        <SelectItem key={code} value={name}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.citizenship && (
                <span className="text-sm text-red-500">
                  {errors.citizenship.message}
                </span>
              )}
            </div>

            {/* Arrival and Departure Dates */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Calendar className="w-4 h-4" />
                Travel Date
              </label>
              <div className="flex gap-4">
                <Controller
                  name="travelDate"
                  control={control}
                  render={({ field }) => (
                    <div className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        placeholderText="Arrival Date"
                        className="w-full"
                      />
                    </div>
                  )}
                />
              </div>
              {errors.travelDate && (
                <span className="text-sm text-red-500">
                  {errors.travelDate.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Clock className="w-4 h-4" />
                No. of Days
              </label>
              <Input
                type="number"
                min={1}
                {...register("numOfDays")}
                placeholder="Enter Number of Days"
              />
              {errors.numOfDays && (
                <span className="text-sm text-red-500">
                  {errors.numOfDays.message}
                </span>
              )}
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <Input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* More Information */}

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Info className="w-4 h-4" />
                Special request(s)
              </label>
              <Textarea
                {...register("specialRequest")}
                placeholder="Enter any special requests here"
              />
            </div>
            {/* -------------------------------------- */}
            {/* <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Info className="w-4 h-4" />
              More Information
            </label>
            <Controller
              name="moreInfo"
              control={control}
              render={({ field }) => (
                <ReactQuill
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Enter additional information"
                />
              )}
            />
          </div> */}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={handleSubmit(onSubmit)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Confirm Booking
            </Button>
          </CardFooter>
        </Card>
      </MagicCard>
    </>
  );
};
