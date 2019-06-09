export class User {
  constructor(
    public name: string,
    public company: string,
    public email: string,
    public repos: number,
    public followers: number,
    public following: number,
    ) {}
}
