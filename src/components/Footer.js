import { GitHubIcon, LinkedInIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/niharika1022', icon: <GitHubIcon className="w-6 h-6" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/niharika-yadav-a70289327/', icon: <LinkedInIcon className="w-6 h-6" /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <TwitterIcon className="w-6 h-6" /> },
    { name: 'Email', href: 'mailto:nyadav07102005@gmail.com', icon: '✉️' }
  ];

  return (
    <footer className="bg-black-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Niharika . All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-2xl"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
           Made with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
