CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    users_id BIGINT REFERENCES users(id),
    status VARCHAR(10)
);