import Typewriter from "@/fancy/components/text/typewriter";

export default function HeroGreeting() {
  return (
    <Typewriter
      text="Hi, it's Aulia here"
      speed={45}
      showCursor
      cursorClassName="ml-1 text-[#2fbf71]"
      className="text-[#2fbf71]"
    />
  );
}