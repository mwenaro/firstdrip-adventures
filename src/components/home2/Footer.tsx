import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} FirstDrip Adventures | Diani Beach, Kenya | +254 (0) 123-456789
        </p>
        <div className="flex space-x-4 mt-4">
          <SocialIcon url="https://www.facebook.com/" />
          <SocialIcon url="https://www.instagram.com/" />
          <SocialIcon url="https://www.twitter.com/" />
        </div>
      </div>
    </footer>
  );
};

