import { findHeroes } from "../models/heroModel.js";

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