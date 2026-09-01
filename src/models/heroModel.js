import { db } from "../prisma/db.js";

export const findHeroes = () => {
    return db.orm.public.Hero.all();
}