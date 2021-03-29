// since I have never seen a XML file before, I will try to learn alittke about them first before even attempting to solve this

// XML = Extensiable Markup language(?)

// JSON = JavaScript Object Notation 

// both are data standards and both store the data in tree structures 

// Data in XML is somewhat similar to HTML, since it extensibly uses open and closing tags like HTML


// so the first thing I need to do is create the JSON file to parse the xml data into

// did that....however one tutorial I'm following is requiring a npm install of a xml2js tool....which I'm pretty sure is against the rules set forth by the challenge.

// That sadly being said, since I'm new to XML...I will do this method to at least futher my understanding of how this is done. 

const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');

const parser = new xml2js.Parser();

fs.readFile('seatmap1.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
        //console.log(result);
        console.log(util.inspect(result, false, null, true));
    });
});