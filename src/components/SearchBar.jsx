import { Input } from "antd";

export default function SearchBar({value, onChange}) {
    return (
        <Input
            size="large"
            placeholder="🔍 Hanapin ang pagkain..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}