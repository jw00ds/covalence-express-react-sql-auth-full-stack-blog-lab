export interface IReview {
    Review_ID: number;
    Review_Author: string;
    Review_Img: string;
    Review_Title: string;
    Review_Commentary: string;
    Review_Tags: string;
}

export interface IUser {
    username: string;
    email: string;
    password: string;
}

export interface ITag {
    Review_Tag_ID: number;
    Review_Tag: string;
}