fs.readFile('./test.json', 'utf-8', (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const data = JSON.parse(jsonString);
      console.log(data.title);
    } catch (err) {
      console.log('Error parsing JSON', err);
    }
  }
});
