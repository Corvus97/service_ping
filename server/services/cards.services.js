
class BalanceService {
    static async checkUser(id) {
        const sql = 'SELECT * from users WHERE id = $1';
        const bindParameters = [id];
        const client = await db.connect();
        const result = await client.query(sql, bindParameters);
        client.release();
        if (result.rowCount > 0) {
            return result.rows[0];
        }
        return false;
    }

    static async registerBalance(req) {
        const {
            amount,
        } = req.body;
        const userId = req.userData.user;
        const sql = 'INSERT INTO balance (wallet_amount, userid ) VALUES($1, $2) RETURNING *';
        const bindParameters = [amount, userId];
        const client = await db.connect();
        const result = await client.query(sql, bindParameters);
        client.release();
        return result.rows;
    }

    static async updateBalance(req, availableAmount) {
        const {
            amount,
        } = req.body;
        const userId = req.userData.user;
        const sql = 'UPDATE balance SET wallet_amount = $1 WHERE userid = $2 RETURNING *';
        const bindParameters = [Number(amount) + availableAmount, userId];
        const client = await db.connect();
        const result = await client.query(sql, bindParameters);
        client.release();
        return result.rows;
    }

    static async removeBalance(req, availableAmount) {
        const {
            amount,
        } = req.body;
        const userId = req.userData.user;
        const sql = 'UPDATE balance SET wallet_amount = $1 WHERE userid = $2 RETURNING *';
        const bindParameters = [availableAmount - Number(amount), userId];
        const client = await db.connect();
        const result = await client.query(sql, bindParameters);
        client.release();
        return result.rows;
    }

    static async getAvailableBalance(req) {
        const userId = req.userData.user;
        const sql = 'SELECT * from balance WHERE userid = $1';
        const bindParameters = [userId];
        const client = await db.connect();
        const result = await client.query(sql, bindParameters);
        client.release();
        return result.rows;
    }


}

export default BalanceService;
