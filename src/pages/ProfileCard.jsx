export default function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h4 className="text-lg font-semibold text-gray-800">
            Account Settings
          </h4>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/109"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border"
            />

            <div>
              <p className="text-base font-medium text-gray-900">
                {user?.fullName || "Guest User"}
              </p>
              <p className="text-sm text-gray-500">
                {user?.email || "guest@email.com"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
            <div className="h-px bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
