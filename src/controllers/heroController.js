import { findHeroes, findHeroById } from "../models/heroModel.js";

export const getHeroes = async (req, res) => {
    try {
        const heroes = await findHeroes();

        res.status(200).json({
            message: "Heroes found",
            total: heroes.length,
            data: heroes
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

export const getHeroById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                message: "ID must be a number"
            });
        }

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "ID must be a valid positive integer"
            });
        }

        const hero = await findHeroById(id);

        if (!hero) {
            return res.status(404).json({
                message: `Hero with ID ${id} not found`
            });
        }

        res.status(200).json({
            message: `Hero with ID ${id} found`,
            data: hero
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}