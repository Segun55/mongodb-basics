
/*for (A)*/
db.myMovies.findOne({movie: "The Banker"})

/*for (B)*/
db.myMovies.find({rating: 7}).pretty()

/*for (C)*/
db.myMovies.find({}, {"movie": 1})