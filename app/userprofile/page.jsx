import { UserProfile } from "@clerk/nextjs";
 
const UserProfilePage = () => (
  <UserProfile path="/userprofile" routing="path" />
);
 
export default UserProfilePage;