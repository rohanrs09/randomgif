import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full flex flex-col background items-center">
      <h1 className=" bg-white rounded-md w-11/12 text-center mt-[40px] text-3xl font-bold ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
