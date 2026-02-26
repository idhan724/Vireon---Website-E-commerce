import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/Icons/logo.svg";
import Button from "../animation/Button";
import Text from "../animation/TextAnimation";

function navbar() {
  const [mobileState, setMobileState] = useState(false);

  const toggleBtn = () => {
    setMobileState(!mobileState);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-extrabold flex gap-3">
            <img src={logo} alt="logo" />
            <Text>Nexcly</Text>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-slate-100/90">
            <a
              className="text-secondary/60 hover:text-secondary transition"
              href="#about"
            >
              About
            </a>
            <a
              className="text-secondary/60 hover:text-secondary transition"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-secondary/60 hover:text-secondary transition"
              href="#HowItWorks"
            >
              How it Works
            </a>
            <a
              className="text-secondary/60 hover:text-secondary transition"
              href="#testimonial"
            >
              Testimonial
            </a>
            <a
              className="text-secondary/60 hover:text-secondary transition"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="text-secondary/60 hover:text-secondary transition"
              href="#contact"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              text="Sign in"
              className="rounded-xl px-8 py-4 text-md font-medium bg-linear-to-br from-cyan-500 to-cyan-300 text-primary hidden lg:block"
            />
            <Button
              text="Register"
              className="rounded-xl px-8 py-4 text-md font-medium bg-linear-to-br from-cyan-500 to-cyan-300 text-primary hidden lg:block"
            />
            <button
              className="lg:hidden px-3 py-2 rounded bg-primary/6"
              onClick={toggleBtn}
            >
              {mobileState ? <X /> : <Menu />}
            </button>
            {mobileState && (
              <div className="absolute lg:hidden right-0 top-full z-99 w-80 p-6 pb-0 flex flex-col bg-white shadow-xl rounded-lg">
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      className="text-secondary/60 hover:text-secondary"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondary/60 hover:text-secondary"
                      href="#features"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondary/60 hover:text-secondary"
                      href="#HowItWorks"
                    >
                      How it Works
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-secondary/60 hover:text-secondary"
                      href="#testimonial"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondary/60 hover:text-secondary"
                      href="#pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondary/60 hover:text-secondary"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="flex flex-row gap-4 py-3 border-t border-slate-400">
                  <Button
                    text="Sign in"
                    className="rounded-xl px-8 py-4 text-md font-medium bg-linear-to-br from-cyan-500 to-cyan-300 text-primary"
                  />
                  <Button
                    text="Register"
                    className="rounded-xl px-8 py-4 text-md font-medium bg-linear-to-br from-cyan-500 to-cyan-300 text-primary"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
