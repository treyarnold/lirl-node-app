console.log('this is loaded');

spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

ticketMaster = {
  id: process.env.TM_ID,
  secret: process.env.TM_SECRET
};

omdb = {
  id: process.env.OMDB_ID
};

module.exports = {
  spotify, 
  ticketMaster, 
  omdb};