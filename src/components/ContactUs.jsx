import { PhoneOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";

import restaurant from "../data/restaurant.json";

export default function ContactUs() {
    return (
        <section
            id="contact"
            className="bg-yellow-50 py-16"
        >
            <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold mb-8 text-center">
                Contact Us
            </h2>

            <div className="space-y-4 text-xl">

                <p>
                <PhoneOutlined />
                {" "}
                {restaurant.contact.phone}
                </p>

                <p>
                <MailOutlined />
                {" "}
                {restaurant.contact.email}
                </p>

                <p>
                <FacebookOutlined />
                {" "}
                {restaurant.contact.facebook}
                </p>

            </div>

            </div>
        </section>
    );
}