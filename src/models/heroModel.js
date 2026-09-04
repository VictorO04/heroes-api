import { db } from "../prisma/db.js";
import AppError from "../utils/AppError.js";

export const findHeroes = () => {
    return db.orm.public.Hero.all();
}

export const findHeroById = async (id) => {
    if (isNaN(id)) {
        throw new AppError("ID must be a number", 400);
    }

    if (!Number.isInteger(id) || id <= 0) {
        throw new AppError("ID must be a valid positive integer", 400);
    }

    const hero = await db.orm.public.Hero.first({ id: id });

    if (!hero) {
        throw new AppError(`Hero with ID ${id} not found`, 404);
    }

    return hero;
}
