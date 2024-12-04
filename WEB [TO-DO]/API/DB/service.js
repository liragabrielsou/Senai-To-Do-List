class service{
    init(db){
        this.db = db;
        this.createTableUsers();
    }

    createTableUsers(){
        const sql = `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            senha VARCHAR(255) NOT NULL
        );`;
        this.db.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Tabela users criada com sucesso!");
        });
    }
}

module.exports = new service();