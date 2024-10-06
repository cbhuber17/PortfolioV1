import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import toast, { Toaster } from "react-hot-toast";

import ParagraphHeader from "./ParagraphHeader";
import { useLanguage } from "../contexts/LanguageContext";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// eslint-disable-next-line react-refresh/only-export-components
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const { isForeign } = useLanguage();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const toastStyle = { fontSize: "20px" };

    if (!form.name) {
      toast.error(
        isForeign ? "Xin hãy nhập tên của bạn." : "Please enter your name.",
        { style: toastStyle }
      );
      return;
    }

    if (!form.email) {
      toast.error(
        isForeign
          ? "Vui lòng cung cấp một địa chỉ email."
          : "Please provide an email address.",
        { style: toastStyle }
      );
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error(
        isForeign
          ? "Vui lòng cung cấp một địa chỉ email hợp lệ."
          : "Please provide a valid email address.",
        {
          style: toastStyle,
        }
      );
      return;
    }

    if (!form.message) {
      toast.error(
        isForeign ? "Vui lòng nhập tin nhắn." : "Please enter a message.",
        { style: toastStyle }
      );
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_kahokve",
        "template_nb2mjeb",
        {
          from_name: form.name,
          to_name: "Colin Huber",
          from_email: form.email,
          to_email: "cbhuber@gmail.com",
          message: form.message,
        },
        "UVMsk9pnDBkOsNHGS"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            isForeign
              ? "Cảm ơn nhiều! Tôi sẽ liên lạc lại với bạn càng sớm càng tốt :)"
              : "Many thanks! I will get back to you ASAP :)"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error(
            isForeign
              ? "Đã xảy ra lỗi. Vui lòng thử lại."
              : "Something went wrong. Kindly try again."
          );
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Flex take up 3/4 of page */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-blue-900 p-8 rounded-2xl"
      >
        {isForeign ? (
          <ParagraphHeader pText="Liên lạc" hText="Liên hệ." style="" />
        ) : (
          <ParagraphHeader pText="Get in touch" hText="Contact." style="" />
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={
                isForeign ? "[Tên Gia Dình] [Tên]" : "[First] [Last]"
              }
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@domain.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={
                isForeign ? "Có chuyện gì thế bạn?" : "Message to Colin..."
              }
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-yellow-400 hover:text-black transition-all"
          >
            {loading
              ? isForeign
                ? "Gửi..."
                : "Sending..."
              : isForeign
              ? "Gửi"
              : "Send"}
          </button>

          <button
            type="button"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-yellow-400 hover:text-black transition-all"
            onClick={() => {
              navigator.clipboard.writeText("cbhuber@gmail.com");
              toast.success(isForeign ? "Đã sao chép email!" : "Copied Email!");
            }}
          >
            {isForeign
              ? "Sao chép email vào Clipboard"
              : "Copy Email to Clipboard"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <Toaster position="bottom-center" />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, "contact");
