import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName) newErrors.fullName = "Full name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Must be 10 digits";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email address";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (!form.company) newErrors.company = "Company name is required";
    if (!form.agency) newErrors.agency = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const isFormValid =
    form.fullName &&
    /^[0-9]{10}$/.test(form.phone) &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.password.length >= 6 &&
    form.company &&
    form.agency;

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find((u) => u.email === form.email);
      if (exists) {
        setServerError("User already exists");
        return;
      }

      users.push({
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        company: form.company,
        phone: form.phone,
        agency: form.agency,
      });

      localStorage.setItem("users", JSON.stringify(users));
      navigate("/profile");
    } catch {
      setServerError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-[360px] px-6 py-8 bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 leading-snug">
          Create your <br /> PopX account
        </h2>

        <form onSubmit={onSubmit} className="mt-6 space-y-6">
          {[
            { label: "Full Name", name: "fullName", placeholder: "Marry Doe" },
            { label: "Phone number", name: "phone", placeholder: "Marry Doe" },
            { label: "Email address", name: "email", placeholder: "Marry Doe" },
            {
              label: "Password",
              name: "password",
              placeholder: "Marry Doe",
              type: "password",
            },
            {
              label: "Company name",
              name: "company",
              placeholder: "Marry Doe",
            },
          ].map(({ label, name, placeholder, type = "text" }) => (
            <div key={name} className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6C2EFF]">
                {label}
                <span className="text-red-500">*</span>
              </label>

              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full rounded-md border px-3 py-3 text-sm placeholder-gray-400 focus:outline-none ${
                  errors[name]
                    ? "border-red-400"
                    : "border-gray-300 focus:border-[#6C2EFF]"
                }`}
              />

              <p className="text-xs text-red-500 mt-1">{errors[name] || " "}</p>
            </div>
          ))}

          <div>
            <p className="text-xs font-medium text-[#6C2EFF] mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.agency === "yes"}
                  onChange={handleChange}
                  className="accent-[#6C2EFF]"
                />
                Yes
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.agency === "no"}
                  onChange={handleChange}
                  className="accent-[#6C2EFF]"
                />
                No
              </label>
            </div>

            <p className="text-xs text-red-500 mt-1">{errors.agency || " "}</p>
          </div>

          {serverError && <p className="text-xs text-red-600">{serverError}</p>}

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-md text-sm font-medium transition ${
              isFormValid && !loading
                ? "bg-[#6C2EFF] text-white hover:bg-purple-700"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
