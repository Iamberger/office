import { store } from "../redux/store";

export default function accessChecker(permission: string) {
  // const miniProfile = store.getState().user;
  let result = true;
  // const permissions = miniProfile.mini_profile.permissions;
  // if (permissions) {
  //   if (Array.isArray(permissions) && permissions.length > 0) {
  //     permissions.forEach((p) => {
  //       if (p.name === permission) {
  //         result = true;
  //         return;
  //       }
  //     });
  //   }
  // }

  return result;
}
