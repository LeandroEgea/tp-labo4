export class User {
  uid: string;
  email: string | null;
  //password: string;
  displayName: string | null;
  photoURL: string | null;
  //emailVerified: boolean;

  public static Create(
    uid: string,
    email: string | null,
    displayName: string | null,
    photoURL: string | null
  ): User {
    let user = new User();

    user.uid = uid;
    user.email = email;
    user.displayName = displayName;
    user.photoURL = photoURL;

    return user;
  }
}
