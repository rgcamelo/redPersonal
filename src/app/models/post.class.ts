export class PostClassObject {
  constructor(
    private user_id:number,
    private user:User,
    private posted_text?:string,
    private image_url?:string,
  ){}
}

export class User {
  constructor(
    private ID:number,
    private name:string,
    private email:string,
    private avatar:string,
  ){
  }

}
