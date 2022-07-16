export interface IArticle {}

export interface IAction {
  type: string;
  payload: any | null;
}

export interface IComment {
  id: number;
  article: string;
  date: Date;
  text: string;
}

export interface IMaterialCategory {
  title: string;
  icon: string;
  color: string;
}

export interface IMaterial {
  id: number;
  title: string;
  date: Date;
  desc: string;
  comments: number;
  favorites: number;
}
