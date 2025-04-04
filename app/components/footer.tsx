import { FloatingDockDemo } from "./dock";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2021. All Rights Reserved.
        </p>

        <div className="flex -mx-2">
          <FloatingDockDemo />
        </div>
      </div>
    </footer>
  );
}
