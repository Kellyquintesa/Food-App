import Image from "next/image";

export const Profile = () => (
  <div className="container mx-auto p-10">
    <Image src="/images/bg1.png" alt="my picture" width={500} height={150} />
  </div>
);

export default Profile;
