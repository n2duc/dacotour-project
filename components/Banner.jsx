import Image from "next/image";
const Banner = () => {
  return (
    <section className="w-full max-h-[784px]">
      <video className="w-full h-full" autoPlay muted playsInline loop src="https://minio.fares.vn/mixivivu-dev/video/Mixivivuduthuyen.mp4"></video>
    </section>
  );
};
export default Banner;
