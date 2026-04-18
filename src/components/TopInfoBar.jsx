import { Mail, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', type: 'linkedin', href: 'https://www.linkedin.com/' },
  { name: 'Instagram', type: 'instagram', href: 'https://www.instagram.com/' },
  { name: 'Facebook', type: 'facebook', href: 'https://www.facebook.com/' },
  { name: 'WhatsApp', type: 'whatsapp', href: 'https://wa.me/917672003606' },
];

const SocialIcon = ({ type }) => {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126S3.35 23.065 4.14 23.37c.765.306 1.635.507 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.077-1.336 1.384-2.126.306-.765.507-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126S21.65.935 21.86.63c.765-.307 1.635-.508 2.913-.558C15.667.012 16.074 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.819.679-1.382.896-.42.164-1.065.36-2.228.416-1.26.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.849-.07-1.161-.091-1.802-.335-2.227-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.819-.896-1.381-.165-.42-.36-1.057-.42-2.226-.059-1.26-.073-1.648-.073-4.85 0-3.204.014-3.585.073-4.849.059-1.17.255-1.801.42-2.226.225-.562.479-.96.9-1.381.42-.419.819-.679 1.379-.896.42-.166 1.054-.36 2.226-.421 1.265-.059 1.644-.07 4.849-.07z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.93-1.95 1.87V12h3.32l-.53 3.46h-2.79v8.39A12 12 0 0 0 24 12" />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.52 3.48A11.79 11.79 0 0 0 12.06 0C5.63 0 .42 5.22.42 11.64c0 2.05.53 4.04 1.54 5.79L0 24l6.74-1.77a11.62 11.62 0 0 0 5.32 1.35h.01c6.42 0 11.64-5.22 11.64-11.64 0-3.11-1.21-6.03-3.19-8.46zm-8.46 18.13h-.01a9.75 9.75 0 0 1-4.96-1.36l-.35-.21-4 .99 1.07-3.9-.23-.4a9.72 9.72 0 0 1-1.49-5.08c0-5.37 4.37-9.74 9.75-9.74 2.6 0 5.05 1.01 6.89 2.85a9.66 9.66 0 0 1 2.86 6.89c0 5.38-4.37 9.75-9.74 9.75zm5.34-7.31c-.29-.15-1.72-.85-1.99-.94-.27-.1-.47-.15-.66.15-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44a8.9 8.9 0 0 1-1.62-2c-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.16-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.49.07-.75.37-.25.29-.98.96-.98 2.35s1 2.73 1.14 2.92c.15.19 1.95 2.98 4.74 4.17.66.29 1.17.46 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.72-.7 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.12-.26-.2-.56-.35z" />
      </svg>
    ),
  };

  return icons[type] || null;
};

export default function TopInfoBar() {
  return (
    <div data-top-info-bar className="fixed top-0 left-0 right-0 z-[60] bg-white/10 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-10 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-normal whitespace-nowrap overflow-x-auto">
          <a href="mailto:ethihaastech@gmail.com" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>ethihaastech@gmail.com</span>
          </a>
          <span className="text-gray-400">|</span>
          <a href="tel:+917672003606" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 7672003606</span>
          </a>
        </div>

        <div className="flex items-center gap-3 text-gray-400 shrink-0">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="transition-colors hover:text-white"
            >
              <SocialIcon type={item.type} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
