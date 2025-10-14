const Urheilija = require("../models/urheilijaModel");

exports.getAll = async (req, res, next) => {
  try {
    const [urheilijat] = await Urheilija.findAll();
    res.status(200).json(urheilijat);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    //let [urheilija, _] = await Urheilija.findById(urheilijaId);
    //res.status(200).json({ urheilija: urheilija[0] });
    const [urheilija] = await Urheilija.findById(urheilijaId);
    res.status(200).json(urheilija[0]);
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

exports.deleteById = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    await Urheilija.deleteById(urheilijaId);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    const urheilijaId = Number(req.params.id);
    const {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset,
    } = req.body;

    await Urheilija.updateById(
      urheilijaId,
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset
    );

    res.status(200).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
