// ! FreeCodeGram

interface Users {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string //! can write like that
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface Users {
  //? Can use 2 interface with same name
  githubToken: string;
}

interface Test {

}

interface Admins extends Users,Test {
  //? interface to interface join with (extends)
  role: "admin" | "ta" | "learner";
}

const hiteshs: Admins = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};
hiteshs.email = "h@hc.com";
// hitesh.dbId = 33
