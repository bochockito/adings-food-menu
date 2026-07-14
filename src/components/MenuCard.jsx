import { Card, Button } from "antd";

export default function MenuCard({item, onOrder}) {
    return (
        <Card hoverablecover={item.image}>
            <h3 className="font-bold text-xl">
                {item.name}
            </h3>

            <p className="text-gray-600">
                {item.description}
            </p>

            <div className="mt-3 flex justify-between items-center">

                <span className="font-bold text-red-600 text-lg">
                    ₱{item.price}
                </span>

                <Button
                    type="primary"
                    danger
                    onClick={onOrder}
                >
                    Order Now
                </Button>

            </div>

        </Card>
    );
}