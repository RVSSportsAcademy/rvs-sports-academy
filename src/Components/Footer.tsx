import { cn } from "@/libs/utils";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./Utils/Button";
import X from "@/assets/x-logo.svg";
import { data } from "framer-motion/client";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer
      className={cn(
        "px-5 sm:px-10 md:px-20 lg:px-40 bg-black text-white py-10"
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
        <div>
          <h5 className="text-lg font-bold">ABOUT US</h5>
          <p className="text-sm text-gray-400 mt-2">
            We are the basketball club playing in Primary League. And have of
            word impact goddesses...
          </p>
        </div>
        <div>
          <h5 className="text-lg font-bold">CONTACT US</h5>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div className="mt-2 flex items-center justify-center sm:justify-start">
            <MapPin className="mr-2" /> 
	  		<h1>{settings.data.address}</h1>
          </div>
          <div className="mt-2 flex items-center justify-center sm:justify-start">
            <Phone className="mr-2" />
            <PrismicNextLink field={settings.data.contact_number}>
              {settings.data.contact_number_label}
            </PrismicNextLink>
          </div>
          
          <div className="mt-2 flex items-center justify-center sm:justify-start">
            <Mail className="mr-2" />
			<PrismicNextLink field={settings.data.contact_email}>
			  {settings.data.contact_email_label}
			</PrismicNextLink>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-bold">SIGN UP FOR UPDATES</h5>
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full mt-2 p-2 text-black rounded"
          />
          <Button variant="primaryDark" size="small" className="mt-3">
            SUBSCRIBE NOW
          </Button>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-3">
            <span>Follow us on:</span>
            <div className="flex gap-2">
              <a href="#" className="text-white">
                {" "}
                <Instagram />
              </a>
              <a href="#" className="text-red">
                {" "}
                <Mail />
              </a>
              <a href="#" className="text-white">
                {" "}
                <MapPin />
              </a>
              <a href="#" className="text-white">
                {" "}
                <X />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        2024 © Elevated Codechums. All Rights Reserved | Made with ❤️ by
        Elevated Codechums
      </div>
    </footer>
  );
}
