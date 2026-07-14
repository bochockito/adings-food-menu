import { PhoneOutlined, MailOutlined, FacebookOutlined} from "@ant-design/icons";

import restaurant from "../data/restaurant.json";

export default function ContactUs() {
  const { phone, email, facebook } = restaurant.contact;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">
                <span className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Get In Touch
                </span>

                <h2 className="text-5xl font-extrabold text-red-800 mt-4">
                    Contact Us
                </h2>

                <p className="text-gray-600 mt-3 text-lg">
                    Craving our Lutong Bahay favorites? Reach out and place your order today.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                
                <a 
                    href={`tel:${phone}`} 
                    className="group bg-white rounded-3xl shadow-lg p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center rounded-full">
                        <PhoneOutlined className="text-3xl !text-white" />
                    </div>

                    <h3 className="text-xl font-bold mt-2 text-gray-800">
                        Call Us
                    </h3>
                    <p className="text-gray-600 mt-2 break-all">
                        {phone}
                    </p>

                </a>

                <a 
                    href={`mailto:${email}`}
                    className="group bg-white rounded-3xl shadow-lg p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center rounded-full">
                        <MailOutlined className="text-3xl !text-white" />
                    </div>

                    <h3 className="text-xl font-bold mt-2 text-gray-800">
                        Email Us
                    </h3>

                    <p className="text-gray-600 mt-2 break-all">
                        {email}
                    </p>

                </a>

                <a 
                    href={facebook}
                    className="group bg-white rounded-3xl shadow-lg p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                    <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center rounded-full">
                        <FacebookOutlined className="text-3xl !text-white" />
                    </div>

                    <h3 className="text-xl font-bold mt-2 text-gray-800">
                        Facebook Page
                    </h3>

                    <p className="text-gray-600 mt-2 break-all">
                        {facebook}
                    </p>

                </a>

            </div>

        </div>
    </section>
  );
}