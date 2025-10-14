const db = require("../config/db"); // Database connection setup

class Urheilija {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuva,
    laji,
    saavutukset
  ) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
    this.paino = paino;
    this.kuva = kuva;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  async save() {
    let sql = `INSERT INTO urheilijat (etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      this.etunimi,
      this.sukunimi,
      this.kutsumanimi,
      this.syntymavuosi,
      this.paino,
      this.kuva,
      this.laji,
      this.saavutukset,
    ];

    const [newPost, _] = await db.execute(sql, values);
    return newPost;
  }

  static findAll() {
    let sql = "SELECT * FROM urheilijat;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM urheilijat WHERE id=${id}`;
    return db.execute(sql);
  }

  static async deleteById(id) {
    let sql = `DELETE FROM urheilijat WHERE ID=${id}`;
    return db.execute(sql);
  }

  static async updateById(
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuva,
    laji,
    saavutukset
  ) {
    const sql = `
        UPDATE urheilijat 
        SET etunimi = ?, 
            sukunimi = ?, 
            kutsumanimi = ?, 
            syntymavuosi = ?, 
            paino = ?, 
            kuva = ?, 
            laji = ?, 
            saavutukset = ? 
        WHERE ID = ?`;

    return db.execute(sql, [
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset,
      id,
    ]);
  }
}

module.exports = Urheilija;
