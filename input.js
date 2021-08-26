
const stdin = process.stdin;
let connection;
const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function (key) {

    switch (key) {
      case '\u0003':
        process.exit();  
      case 'w':
        process.stdout.write(connection.write("Move: up"));
        break;
      case 'a':
        process.stdout.write(connection.write("Move: left"));
        break;
      case 's':
        process.stdout.write(connection.write("Move: down"));
        break;
      case 'd':
        process.stdout.write(connection.write("Move: right"));
        break;
      case 'm':
        process.stdout.write(connection.write("Say: How dare you!"));
        break;
      case 'x':
        process.stdout.write(connection.write("Say: Watch out!"));
        break;
    }
    return;
  
};

module.exports = { setupInput };