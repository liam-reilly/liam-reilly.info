import React from "react";
import Head from "next/head";
import SiteContainer from "../../components/site-container";
import Header from "../../components/header";
import Page from "../../components/page";
import BookTimeline from "../../components/book-timeline";

const Index = () => (
  <React.Fragment>
      <Head>
          <title>The books I've read:  liam-reilly.info</title>
      </Head>
      <SiteContainer>
          <Header/>
          <Page>
            <BookTimeline previousBooks={[
                {
                    title: "Behind the Mask",
                    author: "Tyson Fury",
                    isbn: "978-1-529-12486-6",
                    url: "https://images.isbndb.com/covers/48/66/9781529124866.jpg",
                    year: 2021,
                    month: "jan"
                },
                {
                    title: "The Furious Method",
                    author: "Tyson Fury",
                    isbn: "978-1-529-12592-4",
                    url: "https://images.isbndb.com/covers/59/24/9781529125924.jpg"
                },
                {
                    title: "The Second Sleep",
                    author: "Robert Harris",
                    isbn: "978-1-787-46096-6",
                    url: "https://images.isbndb.com/covers/09/66/9781787460966.jpg"
                },
                {
                    title: "The 48 Laws of Power",
                    author: "Robert Greene",
                    isbn: "978-1-861-97278-1",
                    url: "https://images.isbndb.com/covers/27/81/9781861972781.jpg"
                },
                {
                    title: "The 48 Laws of Power",
                    author: "Robert Greene",
                    isbn: "978-1-861-97278-1",
                    url: "https://images.isbndb.com/covers/27/81/9781861972781.jpg",
                    month: "feb"
                },
                {
                    title: "The 48 Laws of Power",
                    author: "Robert Greene",
                    isbn: "978-1-861-97278-1",
                    url: "https://images.isbndb.com/covers/27/81/9781861972781.jpg",
                    month: "mar"
                },
                {
                    title: "The 50th Law",
                    author: "50 Cent & Robert Greene",
                    isbn: "978-1-846-68079-3",
                    url: "https://images.isbndb.com/covers/07/93/9781846680793.jpg"
                },
                {
                    title: "Be More Pirate",
                    author: "Sam Conniff Allende",
                    isbn: "978-0-241-30788-5",
                    url: "https://images.isbndb.com/covers/78/85/9780241307885.jpg",
                    month: "apr"
                },
                {
                    title: "The Madness of Crowds",
                    author: "Douglas Murray",
                    isbn: "978-1-472-97957-5",
                    url: "https://images.isbndb.com/covers/95/75/9781472979575.jpg",
                },
                {
                    title: "Rich Dad Poor Dad",
                    author: "Robert T. Kiyosaki",
                    isbn: "978-1-612-68019-4",
                    url: "https://images.isbndb.com/covers/28/56/9789463982856.jpg",
                },
                {
                    title: "Never Split the Difference",
                    author: "Chris Voss with Tahl Raz",
                    isbn: "978-1-847-94149-7",
                    url: "https://images.isbndb.com/covers/14/97/9781847941497.jpg",
                    month: "May"
                },
                {
                    title: "12 Rules For life",
                    author: "Jordan B. Peterson",
                    isbn: "978-0-141-98851-1",
                    url: "https://images.isbndb.com/covers/85/11/9780141988511.jpg",
                },
                {
                    title: "The Consuming Instinct",
                    author: "Dr Gad Saad",
                    isbn: "978-1-616-14429-6",
                    url: "https://images.isbndb.com/covers/42/96/9781616144296.jpg"
                },
                {
                    title: "The Parasitic Mind: How Infectious Ideas Are Killing Common Sense",
                    author: "Dr Gad Saad",
                    isbn: "978-1-621-57959-5",
                    url: "https://images.isbndb.com/covers/95/95/9781621579595.jpg"
                },
                {
                    title: "The Parasitic Mind: How Infectious Ideas Are Killing Common Sense",
                    author: "Dr Gad Saad",
                    isbn: "978-1-621-57959-5",
                    url: "https://images.isbndb.com/covers/95/95/9781621579595.jpg",
                    month: "jun"
                },
                {
                    title: "Beyond Order: 12 More Rules for Life",
                    author: "Jordan B. Peterson",
                    isbn: "978-0-593-45308-7",
                    url: "https://images.isbndb.com/covers/30/87/9780593453087.jpg"
                },
                {
                    title: "A State of Fear: How the UK government weaponised fear during the Covid-19 pandemic",
                    author: "Laura Dodsworth",
                    isbn: "978-1-780-66720-1",
                    url: "https://m.media-amazon.com/images/I/41bfwWHD9bS._SL160_.jpg"
                },
                {
                    title: "Grinding It Out:  The Making of McDonald's",
                    author: "Ray Kroc",
                    isbn: "978-0-312-92987-9",
                    url: "https://images.isbndb.com/covers/02/80/9781250130280.jpg"
                },
                {
                    title: "Grinding It Out:  The Making of McDonald's",
                    author: "Ray Kroc",
                    isbn: "978-0-312-92987-9",
                    url: "https://images.isbndb.com/covers/02/80/9781250130280.jpg",
                    month: "JUL"
                },
                {
                    title: "Shoe Dog: A Memoir by the Creator of NIKE",
                    author: "Phil Knight",
                    isbn: "978-1-4711-4670-1",
                    url: "https://images.isbndb.com/covers/67/01/9781471146701.jpg",
                    year: "2021",
                    month: "JUL"
                }
            ]}
            currentBook={{
                title: "Hustle Harder, Hustle Smarter",
                author: "Curtis Jackson",
                isbn: "978-0-0629-5382-7",
                url: "https://images.isbndb.com/covers/38/27/9780062953827.jpg",
                year: "2021"
            }}
            />
          </Page>
      </SiteContainer>
  </React.Fragment>
);

export default Index