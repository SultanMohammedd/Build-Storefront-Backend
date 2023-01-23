import client from "../database";

export type Product = {
    id: Number;
    name: string;
    price: string;
    category: string;
};

export class ProductStore{
    //READ
    async index(): Promise<Product[]>{
       try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            const products = result.rows
        return products;
       } catch (err) {
        throw new Error(`Cannot fetch Information ${err}`);
       }
    };
    //READ a specific 
    async show(id: string): Promise<Product> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products WHERE id = ($1)';
            const result = await conn.query(sql,[id]);
            conn.release();
            const products = result.rows[0];
        return products;
        } catch (err) {
            throw new Error(`Cannot fetch Information ${err}`);
        }
    };
    
};