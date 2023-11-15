import { Navbar } from "../components";

export default function PageNotFound() {
  return (
    <div className="relative z-0 bg-primary h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <h1 className="mt-[70px] text-center text-xl">Page Not Found!</h1>
    </div>
  );
}
