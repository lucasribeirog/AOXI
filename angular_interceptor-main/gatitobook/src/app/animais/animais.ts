export interface Animal {
  id: number,
  postDate: Date,
  url: string,
  description: string,
  allowComments: boolean,
  likes: number,
  commments: number,
  userId: number
}

export type Animais = Array<Animal>;
