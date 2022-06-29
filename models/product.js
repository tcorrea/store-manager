const connection = require('../database/connection')
// Verb	       URI	                Action	Route Name
// GET	      /photos	              index	  photos.index
// GET	      /photos/create	      create	photos.create
// POST	      /photos	              store	  photos.store
// GET	      /photos/{photo}	      show	  photos.show
// GET	      /photos/{photo}/edit	edit	  photos.edit
// PUT/PATCH	/photos/{photo}	      update	photos.update
// DELETE	    /photos/{photo}	      destroy	photos.destroy

const productModel = {
  index: async () => {
    const query = 'SELECT * FROM products';

    const data = connection.execute(query);

    return data;
  },

  show: async (id) => {
    const query = 'SELECT * FROM products WHERE id = (?)';

    const data = connection.execute(query, [id]);

    return data;
  },
}

module.exports = productModel;
