import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";


export const ContactForm = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Contact FirstDrip Adventures</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button  type="submit">Send Message</Button>
          </form>
        </div>
        <div className="md:w-1/3 md:ml-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.681858828995!2d39.23069098985603!3d-4.04612379253449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11676b16494f%3A0x76156c2b6c4788b!2sDiani%20Beach%2C%20Kenya!5e0!3m2!1sen!2ske!4v1695527828002!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

