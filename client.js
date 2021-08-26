// establishes a connection with the game server

const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (data) => {
    console.log("Successfully connected to game server");
    conn.write('Name: KAT');
    conn.write("Say: Hello how are you");
  });
  return conn;
};

module.exports =  { connect };