// import { ErrorMessage } from "../ui/ErrorMessage";
import { Header } from "@/components/layer/Header";
export const ContactInfo = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col  gap-y-3 mb-30 mt-8">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            First name <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="firstName"
            placeholder="Your first name"
            className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Last name <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="lastName"
            placeholder="Your last name"
            className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Username <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="username"
            placeholder="Your username"
            className="w-[416] h-11 rounded-md border p-3 border-[#CBD5E1]"
          />
        </div>
      </div>
    </div>
  );
};
