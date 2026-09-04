const globalError = (error, req, res, next) => {
    const message = error.message || "Internal server error";
    const statusCode = error.statusCode || 500;

    if (statusCode === 500) {
        console.error(error);
    }

    res.status(statusCode).json({ message });
}

export default globalError;
