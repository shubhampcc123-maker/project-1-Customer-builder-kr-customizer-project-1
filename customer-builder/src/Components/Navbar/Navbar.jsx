import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navLinks = [
    { title: "Showcase", hasDropdown: true, id: "showcase" },
    { title: "About Us", id: "about" },
    { title: "Case Studies", id: "case-studies" },
    { title: "Blog", id: "blog" },
    { title: "Contact", id: "contact" },
  ];
  const showcaseItems = [
    { title: "Product 1", id: "product1" },
    { title: "Product 2", id: "product2" },
    { title: "Product 3", id: "product3" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur"
      style={{ fontFamily: "GT Walsheim Trial, sans-serif" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img
            src={logo}
            alt="KR Customizer"
            className="h-10 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
          />
        </div>

        <div className="hidden lg:flex items-center gap-6 text-gray-700 ml-10 flex-1">
          {navLinks.map((item) => (
            <div key={item.title}>
              <button
                type="button"
                onClick={() => {
                  if (item.hasDropdown) {
                    setShowDropdown(!showDropdown);
                  } else {
                    scrollToId(item.id);
                    setIsOpen(false);
                  }
                }}
                className="flex w-full items-center justify-between font-medium text-gray-700"
              >
                <span>{item.title}</span>

                {item.hasDropdown && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* {item.hasDropdown && showDropdown && (
                <div className="relative left-0 top-full mt-4 w-48 rounded-lg bg-white shadow-lg ">
                  {showcaseItems.map((subItem) => (
                    <button
                      key={subItem.title}
                      onClick={() => {
                        scrollToId(subItem.id);
                        setIsOpen(false);
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left text-gray-600 hover:text-black"
                    >
                      {subItem.title}
                    </button>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="font-medium transition hover:text-yellow-500"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="rounded-xl bg-yellow-300 px-6 py-3 font-semibold transition hover:bg-yellow-400"
          >
            Get a demo
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t bg-white px-6 py-5 space-y-5 lg:hidden">
          {navLinks.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => {
                scrollToId(item.id);
                setIsOpen(false);
              }}
              className="flex w-full items-center justify-between font-medium text-gray-700"
            >
              <span>{item.title}</span>
              {item.hasDropdown ? <ChevronDown size={18} /> : null}
            </button>
          ))}

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="button"
              onClick={() => {
                scrollToId("contact");
                setIsOpen(false);
              }}
              className="text-left font-medium"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                scrollToId("contact");
                setIsOpen(false);
              }}
              className="rounded-xl bg-[#FDE105] py-3 font-semibold transition-colors duration-300 hover:bg-[#e6cd05]"
            >
              Get a demo
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
