const Urheilija = require("../models/urheilijaModel");

exports.getAll = async (req, res, next) => {
  try {
    const [urheilija, _] = await Urheilija.findAll();
    res.status(200).json({ count: urheilija.length, urheilija });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    let [urheilija, _] = await Urheilija.findById(urheilijaId);
    res.status(200).json({ urheilija: urheilija[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNew = async (req, res, next) => {
  try {
    let {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset,
    } = req.body;
    let urheilija = new Urheilija(
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset
    );
    urheilija = await urheilija.save();
    res.status(201).json({ message: "Entry created succesfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
