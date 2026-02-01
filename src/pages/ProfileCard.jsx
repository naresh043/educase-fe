export default function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-[360px] bg-gray-100">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-white">
          <h4 className="text-sm font-medium text-gray-900">
            Account Settings
          </h4>
        </div>

        {/* Profile section */}
        <div className="px-6 pt-6 bg-gray-100">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#6C2EFF] flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7
                  7-3.14 7-7-3.14-7-7-7zm0-2
                  c4.97 0 9 4.03 9 9s-4.03 9-9 9
                  -9-4.03-9-9 4.03-9 9-9zm-1
                  5h2v4h-2zm0 6h2v2h-2z" />
                </svg>
              </div>
            </div>

            <div className="pt-1">
              <p className="text-sm font-semibold text-gray-900">
                {user?.fullName || "Marry Doe"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {user?.email || "marry@gmail.com"}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 leading-relaxed mt-6">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          {/* Divider */}
          <div className="h-px bg-gray-200 mt-6"></div>
        </div>
      </div>
    </div>
  );
}
