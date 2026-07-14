import { Input } from "antd";

export default function SearchBar({value, onChange}) {
    return (
        <Input
            size="large"
            placeholder="🔍 Hanapin ang pagkain - 食べ物を探してください - Find the food..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}