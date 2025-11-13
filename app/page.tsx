import Image from "next/image";
import Card from "@/component/card";
import { containerStyle } from "./styles";

export default function Home() {
  return (
    <div className={`${containerStyle}`}>
      <Card />
    </div>
  );
}
