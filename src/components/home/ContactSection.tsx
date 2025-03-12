'use client'
// components/sections/ContactSection.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HttpService } from "@/lib/HttpService";
import { Mail, Phone, MapPin } from "lucide-react";
import { FormEventHandler, useState } from "react";

type UserDetails = {
  name: string;
  email: string;
  message: string;
};
export const ContactSection: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    message: "",
  });
  const httpService = new HttpService('/api/v1/contact-form')

  function handleChange(e: any) {
    setUserDetails(prevDetails => ({ ...prevDetails, [e.target.name]: e.target.value }));
    // console.log(userDetails)
  }

  // const handleSubmit = (e:any) => {
  const handleSubmit: FormEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()


    // const isvalidForm = !Object.values(userDetails).includes("");
    // if (!isvalidForm) return;
    console.log(userDetails);
    //post the data
    try {
      const res = await httpService.post('', userDetails)
      console.log({ res })

      setUserDetails({
        name: "",
        email: "",
        message: "",
      })

    } catch (error:any) {
      console.log(error.message)

    }



  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Contact FirstDrip Adventures
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <Mail className="mr-4 text-blue-500" />
              <span>info@firstdripadventures.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-blue-500" />
              <span>+254 (0) 123 456 789</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4 text-blue-500" />
              <span>Diani Beach, Kenya</span>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4" >

            <Input
              placeholder="Your Name"
              name="name"
              value={userDetails.name}
              required
              onChange={handleChange}
            />
            <Input
              placeholder="Email Address"
              type="email"
              name="email"
              value={userDetails.email}
              required
              onChange={handleChange}
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              name="message"
              value={userDetails.message}
              required
              onChange={handleChange}
            />
            <Button

              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
