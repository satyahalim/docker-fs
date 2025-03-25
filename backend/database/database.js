import { Sequelize } from "sequelize";

//nama db, nama user, password
const db = new Sequelize("tcc","root","",{
    host: "34.60.58.134",
    dialect: "mysql"
})

export default db