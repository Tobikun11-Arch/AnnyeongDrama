export interface IComment {
    _id: string;
    postId: string;
    author: string;
    content: string;
}
  
export interface IPosts {
    _id: string;
    content: string;
    author: string;
    comments: string[]; // Array of comment IDs
    likes: string[]; // Array of user IDs who liked the post
}
  
export interface IUser {
    _id: string;
    Username: string;
    FaveKdrama: string;
    Email: string;
    Password: string;
    Watching: string;
    Following: number;
    Follower: number;
    Posts: IPosts[];
    __v: number;
}