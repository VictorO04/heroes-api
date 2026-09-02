import { db } from "../prisma/db.js";

export const findHeroes = () => {
    return db.orm.public.Hero.all();
}

export const findHeroById = (id) => {
  return db.orm.public.Hero.first({ id: id });
}