import React from "react";

const GitHubIcon = () => (
  <svg
    className="text-lg"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="text-lg"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="text-lg"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="text-lg"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#15171b] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 py-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/raghav3615/chotuURL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/70 hover:text-white transition-colors"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/raghavhere/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/70 hover:text-white transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/raghav_dadhich"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="text-white/70 hover:text-white transition-colors"
          >
            <TwitterIcon />
          </a>
          <a
            href="mailto:dadhichraghav896@gmail.com"
            aria-label="Email"
            className="text-white/70 hover:text-white transition-colors"
          >
            <EmailIcon />
          </a>
        </div>
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Raghav Dadhich. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
