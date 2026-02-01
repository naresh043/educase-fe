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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M257.1 96C238.4 96 220.9 105.4 210.5 120.9L184.5 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L455.5 160L429.5 120.9C419.1 105.4 401.6 96 382.9 96L257.1 96zM250.4 147.6C251.9 145.4 254.4 144 257.1 144L382.8 144C385.5 144 388 145.3 389.5 147.6L422.7 197.4C427.2 204.1 434.6 208.1 442.7 208.1L512 208.1C520.8 208.1 528 215.3 528 224.1L528 480.1C528 488.9 520.8 496.1 512 496.1L128 496C119.2 496 112 488.8 112 480L112 224C112 215.2 119.2 208 128 208L197.3 208C205.3 208 212.8 204 217.3 197.3L250.5 147.5zM320 448C381.9 448 432 397.9 432 336C432 274.1 381.9 224 320 224C258.1 224 208 274.1 208 336C208 397.9 258.1 448 320 448zM256 336C256 300.7 284.7 272 320 272C355.3 272 384 300.7 384 336C384 371.3 355.3 400 320 400C284.7 400 256 371.3 256 336z"/></svg>
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
