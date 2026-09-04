import { findHeroes, findHeroById } from "../models/heroModel.js";

export const getHeroes = async (req, res) => {
    const heroes = await findHeroes();

    res.status(200).json({
        message: "Heroes found",
        total: heroes.length,
        data: heroes,
    });
}

export const getHeroById = async (req, res) => {
    const id = Number(req.params.id);
    const hero = await findHeroById(id);

    res.status(200).json({
        message: `Hero with ID ${id} found`,
        data: hero,
    });
}
