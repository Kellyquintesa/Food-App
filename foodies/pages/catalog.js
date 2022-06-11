import Image from "next/image";

export const Profile = () => (
  <div className=" pt-20 pb-20">
    <div className="container mx-auto flex flex-wrap justify-center ">
      <Image src="/images/bg3.png" alt="my picture" width={800} height={250} />
      <Image src="/images/bg2.png" alt="my picture" width={800} height={250} />
      <Image src="/images/bg4.png" alt="my picture" width={800} height={250} />
      <Image src="/images/bg5.png" alt="my picture" width={800} height={250} />
      <Image src="/images/bg1.png" alt="my picture" width={800} height={250} />
      <Image src="/images/bg6.png" alt="my picture" width={800} height={250} />
    </div>
  </div>
);

export default Profile;
