abstract class TakePhoto2 {//? abstract class ဆို အနည်းဆုံး abstract class 1 ခု ရှိရမယ်
  constructor(
      public cameraMode: string,
      public filter: string
  ){}
  //? Abstract class must have at least one abstract class.


  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const hc = new Instagram2("test", "Test", 3);

hc.getReelTime(); // *** 8
hc.getSepia(); // *** Sepia
