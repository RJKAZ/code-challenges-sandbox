let xmlContent = '';

let tableSeats = document.getElementById('seats');

fetch('seatmap1.xml').then((response) => {
    response.text().then((xml) => {
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let seats = xmlDOM.querySelectorALL('ns:SeatInfo');

        seats.forEach(SeatInfoXmlNode => {
            let row = document.createElement('tr');

            //features

            let td = document.createElement('td');
            td.innerText = SeatInfoXmlNode.children[1].innerHTML;
            row.appendChild(td);

            tableSeats.children[1].appendChild(row);
        })


    })
})