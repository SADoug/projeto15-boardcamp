import db from "../config/db.js";

export async function getCategories(req, res) {
  const {limit, offset, order, desc} = req.query;
  const offsetClause = offset ? `OFFSET ${offset}` : '';
  const limitClause = limit ? `LIMIT ${limit}` : '';

  const filters = {
    id: 1, name: 2
  };
  const orderClause = order ? `ORDER BY ${filters[order]} ${desc ? 'desc' : ''} ` : '';

  try {
    const result = await db.query(`
      SELECT * FROM categories
      ${offsetClause}
      ${limitClause}  
      ${orderClause}
    `);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // internal server error
  }
}

export async function createCategory(req, res) {
  const category = req.body;
  console.log(category);
  try {
    const result = await db.query('SELECT id FROM categories WHERE name=$1', [category.name]);
    if (result.rowCount > 0) {
      return res.sendStatus(409); // conflict
    }

    await db.query(`INSERT INTO categories(name) VALUES ($1)`, [category.name]);
    res.sendStatus(201); // created
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // internal server error
  }
}