let cfg = {
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    STRIPE_SK: process.env.STRIPE_SK,
    db: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'kurstyn16',
        database: 'blog',
    },
};

export default{ cfg };