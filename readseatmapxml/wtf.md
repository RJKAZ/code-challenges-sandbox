Ok.....so in my stalled efforts to use Javascript to parse data from an XML file, and display that data to the HTML (and then send it to JSON, and then rework it for Phyton)
I hit a snag because the seat map XML file wasn't encoded the same way my example XML files were done....so the code I used to read the XML Book Data wouldnt' apply to the XML Seat Data 

so lets find out why


So the Seat Data has also this xmlns and soapenv......what is all that?

This SeatMap XML file isn't just a XML file, its acctually a ENDECA Data Store

In trying to learn more about this....I am now far more confused.

So ENDECA was a private company who produced on-line libaries and provided search support(?) for ecommerce platfrom


then Orcale bought them in 2011

So that brings us to what is called the Oracle Endeca Server

Oracle Endeca Server is a hybrid search-analytical database. It organizes complex and varied data from disparate source systems into a flexiable data model.

So my assumption is that Gordian Software uses the Oracle Endeca Server to stores it data....so the XML data file is written to the efforts of that. 

to be continued ----

homework reading 

https://www.rittmanmead.com/blog/2012/02/oracle-endeca-week-so-just-what-is-endeca/