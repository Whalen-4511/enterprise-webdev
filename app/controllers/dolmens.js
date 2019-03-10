'use strict';


const Dolmen = require('../models/dolmen');

const User = require('../models/user');



const Dolmens = {

  home: {
    handler: async function(request, h) {
      const dolmens = await Dolmen.find();
      return h.view('home', { title: 'Add a Dolmen', dolmens: dolmens });
    }
  },
  report: {
    handler: async function(request, h) {
      const dolmens = await Dolmen.find();
      return h.view('report', {
        title: 'Dolmens of Ireland',
        dolmens:dolmens
      });
    }
  },

  dolmen: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;


       ;

        const newDolmen = new Dolmen({
          name: data.name,
          county: data.county,
          coordinates: data.coordinates,
          type: data.type,
          age: data.age
        });
        await newDolmen.save();
        return h.redirect('/report');
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  },
};

module.exports = Dolmens;
