import { Card, Button, Tag, Image } from "antd";
import { no_image } from "../assets/image/fallback";

export default function MenuCard({item, onOrder}) {

    const imageSrc = item.image ? `${import.meta.env.BASE_URL}${item.image}` : no_image;

    return (
        <Card 
            hoverable
            cover={
                <Image
                    alt={item.name}
                    width="100%"
                    height="250px"
                    src={imageSrc}
                    preview={false}
                    fallback={no_image}
                    className="h-56 w-full object-cover"
                />

            }
        >
            <h3 className="font-bold text-xl">
                {item.name}
            </h3>

            <div className="text-gray-600">
                {item.description}
            </div>

            { item.japdesc != "" &&
                <div className="text-gray-600 mt-[10px]">
                    {item.japdesc}
                </div>
            }
            <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">
                    Order Type
                </h4>
                <div className="flex flex-wrap gap-1">
                    {item.type?.map((ingredient, index) => (
                        <Tag key={index} color="default">
                            {ingredient}
                        </Tag>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">
                    Ingredients
                </h4>
                <div className="flex flex-wrap gap-1">
                    {item.ingredients?.map((ingredient, index) => (
                        <Tag key={index} color="gold">
                            {ingredient}
                        </Tag>
                    ))}
                </div>
            </div>

            <div className="mt-3 flex justify-between items-center">
                <span className="font-bold text-red-600 text-lg">
                    ₱{(item.price).toFixed(2)}
                </span>
                <Button type="primary" danger onClick={onOrder}>
                    Order Now
                </Button>
            </div>

        </Card>
    );
}