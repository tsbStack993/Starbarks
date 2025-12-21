import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
    { label: "YouTube", icon: FaYoutube },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About Us", key: "item-1-1" },
      { label: "Menu", key: "item-1-2" },
      { label: "Contact Us", key: "item-1-3" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help Center", key: "item-2-1" },
      { label: "Privacy Policy", key: "item-2-2" },
      { label: "Terms of Service", key: "item-2-3" },
    ],
  ];

  return (
    <footer className=" py-12 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {/* Logo & Social */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold">Starbarks</span>
          </div>
          <div className="text-gray-600 mb-4">
            <span>© 2025 Starbarks. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className=" hover:text-[#00704A] transition"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6">
          {links.map((col, index) => (
            <ul key={index} className="space-y-2">
              {col.map((link) => (
                <li key={link.key} className="text-gray-600 hover:text-white cursor-pointer">
                  {link.label}
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <label className="text-lg font-semibold mb-2 block">Stay Updated</label>
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="w-full p-3 rounded-lg border-none"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
