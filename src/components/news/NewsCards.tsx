import React from 'react';
import { Grid } from '@material-ui/core';
import Parser from 'rss-parser';
import TextCard from './TextCards';


// const parser = new Parser({
//   headers: { 'User-Agent': 'Mozilla/5.0' },
//   requestOptions: { rejectUnauthorized: false },
// });
// const feed = parser.parseURL("https://petroleum.farm/rss-feed-314014698281.xml");


export default function NewsCards(props: Props) {
  const [res, setRes] = React.useState(null);
  let parser = new Parser({
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 Edg/101.0.1210.32' },
    requestOptions: { rejectUnauthorized: false },
  });

  let list = res || []  
  React.useEffect(() => {

    parser.parseURL('https://petroleum.farm/rss-feed-314014698281.xml').then((response) => {

      if (response.items.length) {
        console.log(response.items);
        response.items.forEach(item => {
          console.log(item.title?item.title:'No Title' + ':' + item.link?item.link:'No Link' + item.pubDate?item.pubDate:'No Publication Date')
        });
        setRes(response.items);
      } else {
        console.log("No items in server response!");
        console.log(response);
      }
      return null;
    }).catch((e) => {
      console.log(e.message);
      setRes([{
        date: String(new Date().getDate()),
        title: "Error Getting Feed",
        content: e.message,
        link: "https://petroleum.farm",
      }])
    });

  }, []);


  return (
    <div>
      <Grid spacing={3} alignItems="stretch" container>
        {(list.reverse()).map(item => (
          <Grid xs={12} sm={6} md={4} item>
            <TextCard date={item.pubDate ? String(item.pubDate) : 'Publication Date Unknown'} title={item.title ? item.title : 'Petroleum Blog Link'} description= 'Click to Visit' url={item.link ? item.link : 'https://petroleum.farm'} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
