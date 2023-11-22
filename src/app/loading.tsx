import DefaultBackground from "@/components/DefaultBackground";
import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <main className="isolate min-h-ful w-full flex justify-center  h-[calc(100vh_-_11rem)]">
      <DefaultBackground />
      <Loader />
    </main>
  );
}
