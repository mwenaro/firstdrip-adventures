"use client";
import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingFormData } from "@/schemas/bookingSchema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

import {
  Calendar,
  User,
  Mail,
  Info,
  Phone,
  Globe,
  User as UserIcon,
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookingFormProps {
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
      arrivalDate: new Date(),
      departureDate: undefined,
      email: "",
      moreInfo: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    Swal.fire({
      title: "Booking Confirmed!",
      html: `
        <p><strong>Destination:</strong> ${destination?.name || "N/A"}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Telephone:</strong> ${data.tel}</p>
        <p><strong>Citizenship:</strong> ${data.citizenship}</p>
        <p><strong>Arrival Date:</strong> ${data.arrivalDate.toLocaleDateString()}</p>
        <p><strong>Departure Date:</strong> ${data.departureDate?.toLocaleDateString()}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>More Info:</strong> ${data.moreInfo || "N/A"}</p>
      `,
      icon: "success",
      confirmButtonText: "OK",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });

  };

  return (
    <MagicCard className="max-w-lg mx-auto">
      <Card className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            {destination?.name || "Book Your Trip"}
          </CardTitle>
          <p className="text-sm text-gray-600">{destination?.location || "Select a destination"}</p>
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
              <span className="text-sm text-red-500">{errors.name.message}</span>
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
                    <SelectItem value="notSay">Not Say</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.gender && (
              <span className="text-sm text-red-500">{errors.gender.message}</span>
            )}
          </div>

          {/* Telephone */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4" />
              Telephone
            </label>
            <Input
              type="tel"
              {...register("tel")}
              placeholder="Enter your telephone number"
            />
            {errors.tel && (
              <span className="text-sm text-red-500">{errors.tel.message}</span>
            )}
          </div>

          {/* Citizenship */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Globe className="w-4 h-4" />
              Citizenship
            </label>
            <Input
              type="text"
              {...register("citizenship")}
              placeholder="Enter your citizenship"
            />
            {errors.citizenship && (
              <span className="text-sm text-red-500">{errors.citizenship.message}</span>
            )}
          </div>

          {/* Arrival and Departure Dates */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Calendar className="w-4 h-4" />
              Arrival and Departure Dates
            </label>
            <div className="flex gap-4">
              <Controller
                name="arrivalDate"
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
              <Controller
                name="departureDate"
                control={control}
                render={({ field }) => (
                  <div className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      placeholderText="Departure Date"
                      className="w-full"
                    />
                  </div>
                )}
              />
            </div>
            {errors.arrivalDate && (
              <span className="text-sm text-red-500">{errors.arrivalDate.message}</span>
            )}
            {errors.departureDate && (
              <span className="text-sm text-red-500">{errors.departureDate.message}</span>
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
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* More Information */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Info className="w-4 h-4" />
              More Information
            </label>
            <Textarea
              {...register("moreInfo")}
              placeholder="Enter additional information"
            />
          </div>
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
  );
};

export default BookingForm;