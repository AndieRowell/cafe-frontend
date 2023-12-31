import React from "react";
import TestImg1 from "../public/assets/drinks/IMG_8291.jpg";


export const drinksData =
[
  {
    id: 1,
    name: "Flat White",
    cafe_id: 11,
    // img: "http://dummyimage.com/199x100.png/ff4444/ffffff",
    img: TestImg1,
    description:
      "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non",
    price: "$4.90",
    promotion: true,
    featured: false,
    size: "12 oz",
    notes: "sit amet consectetuer adipiscing elit proin interdum",
  },
  {
    id: 2,
    name: "Espresso",
    cafe_id: 14,
    img: "http://dummyimage.com/210x100.png/5fa2dd/ffffff",
    description:
      "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
    price: "$3.67",
    promotion: false,
    featured: false,
    size: "16 oz",
    notes: "eu nibh quisque id justo sit amet",
  },
  {
    id: 3,
    name: "Irish Coffee",
    cafe_id: 3,
    img: "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
    description:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
    price: "$3.76",
    promotion: true,
    featured: true,
    size: "16 oz",
    notes: "in purus eu magna vulputate luctus cum",
  },
  {
    id: 4,
    name: "Americano",
    cafe_id: 5,
    img: "http://dummyimage.com/225x100.png/5fa2dd/ffffff",
    description:
      "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero",
    price: "$5.22",
    promotion: true,
    featured: false,
    size: "12 oz",
    notes: "sociis natoque penatibus et magnis dis parturient",
  },
  {
    id: 5,
    name: "Macchiato",
    cafe_id: 15,
    img: "http://dummyimage.com/231x100.png/ff4444/ffffff",
    description:
      "congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
    price: "$4.03",
    promotion: false,
    featured: true,
    size: "12 oz",
    notes: "congue eget semper rutrum nulla nunc",
  },
  {
    id: 6,
    name: "Flat White",
    cafe_id: 2,
    img: "http://dummyimage.com/198x100.png/ff4444/ffffff",
    description:
      "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
    price: "$6.84",
    promotion: false,
    featured: false,
    size: "12 oz",
    notes: "quam sapien varius ut blandit non interdum in",
  },
  {
    id: 7,
    name: "Espresso",
    cafe_id: 8,
    img: "http://dummyimage.com/150x100.png/5fa2dd/ffffff",
    description:
      "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque",
    price: "$0.73",
    promotion: true,
    featured: false,
    size: "16 oz",
    notes: "ac tellus semper interdum mauris ullamcorper",
  },
  {
    id: 8,
    name: "Macchiato",
    cafe_id: 12,
    img: "http://dummyimage.com/112x100.png/ff4444/ffffff",
    description:
      "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
    price: "$6.33",
    promotion: true,
    featured: true,
    size: "12 oz",
    notes: "suscipit a feugiat et eros vestibulum",
  },
  {
    id: 9,
    name: "Cappuccino",
    cafe_id: 7,
    img: "http://dummyimage.com/221x100.png/cc0000/ffffff",
    description:
      "curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
    price: "$0.13",
    promotion: false,
    featured: false,
    size: "12 oz",
    notes: "ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
  },
  {
    id: 10,
    name: "Affogato",
    cafe_id: 1,
    img: "http://dummyimage.com/179x100.png/dddddd/000000",
    description:
      "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis",
    price: "$1.95",
    promotion: false,
    featured: true,
    size: "16 oz",
    notes: "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus",
  },
  {
    id: 11,
    name: "Cappuccino",
    cafe_id: 4,
    img: "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
    description:
      "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
    price: "$0.80",
    promotion: false,
    featured: true,
    size: "16 oz",
    notes: "tempor turpis nec euismod scelerisque quam turpis adipiscing",
  },
  {
    id: 12,
    name: "Espresso",
    cafe_id: 10,
    img: "http://dummyimage.com/250x100.png/dddddd/000000",
    description:
      "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper",
    price: "$2.16",
    promotion: false,
    featured: false,
    size: "12 oz",
    notes: "feugiat non pretium quis lectus suspendisse",
  },
  {
    id: 13,
    name: "Affogato",
    cafe_id: 6,
    img: "http://dummyimage.com/129x100.png/ff4444/ffffff",
    description:
      "justo nec condimentum neque sapien placerat ante nulla justo aliquam",
    price: "$5.53",
    promotion: false,
    featured: true,
    size: "16 oz",
    notes: "ut at dolor quis odio consequat varius",
  },
  {
    id: 14,
    name: "Affogato",
    cafe_id: 13,
    img: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
    description:
      "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
    price: "$5.31",
    promotion: false,
    featured: false,
    size: "16 oz",
    notes: "augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
  },
  {
    id: 15,
    name: "Affogato",
    cafe_id: 9,
    img: "http://dummyimage.com/135x100.png/5fa2dd/ffffff",
    description:
      "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
    price: "$0.82",
    promotion: true,
    featured: false,
    size: "12 oz",
    notes: "sagittis sapien cum sociis natoque penatibus et magnis",
  },
  {
    id: 16,
    name: "Mocha",
    cafe_id: 8,
    img: "http://dummyimage.com/167x100.png/cc0000/ffffff",
    description:
      "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
    price: "$4.87",
    promotion: true,
    featured: false,
    size: "12 oz",
    notes: "curae nulla dapibus dolor vel est donec odio justo sollicitudin",
  },
  {
    id: 17,
    name: "Americano",
    cafe_id: 3,
    img: "http://dummyimage.com/121x100.png/dddddd/000000",
    description:
      "vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
    price: "$3.24",
    promotion: false,
    featured: true,
    size: "12 oz",
    notes: "sollicitudin ut suscipit a feugiat et eros vestibulum ac",
  },
  {
    id: 18,
    name: "Espresso",
    cafe_id: 10,
    img: "http://dummyimage.com/180x100.png/5fa2dd/ffffff",
    description:
      "in purus eu magna vulputate luctus cum sociis natoque penatibus",
    price: "$3.79",
    promotion: false,
    featured: false,
    size: "16 oz",
    notes: "congue eget semper rutrum nulla nunc purus phasellus",
  },
  {
    id: 19,
    name: "Espresso",
    cafe_id: 1,
    img: "http://dummyimage.com/148x100.png/dddddd/000000",
    description:
      "tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
    price: "$0.99",
    promotion: true,
    featured: true,
    size: "16 oz",
    notes: "molestie hendrerit at vulputate vitae nisl aenean",
  },
  {
    id: 20,
    name: "Flat White",
    cafe_id: 11,
    img: "http://dummyimage.com/139x100.png/dddddd/000000",
    description:
      "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
    price: "$2.97",
    promotion: false,
    featured: true,
    size: "16 oz",
    notes: "sapien a libero nam dui proin leo odio porttitor",
  },
  {
    id: 21,
    name: "Mocha",
    cafe_id: 9,
    img: "http://dummyimage.com/121x100.png/cc0000/ffffff",
    description:
      "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et",
    price: "$1.06",
    promotion: true,
    featured: false,
    size: "16 oz",
    notes: "diam vitae quam suspendisse potenti nullam porttitor",
  },
  {
    id: 22,
    name: "Latte",
    cafe_id: 7,
    img: "http://dummyimage.com/204x100.png/cc0000/ffffff",
    description:
      "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
    price: "$1.66",
    promotion: false,
    featured: true,
    size: "12 oz",
    notes: "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
  },
  {
    id: 23,
    name: "Affogato",
    cafe_id: 14,
    img: "http://dummyimage.com/120x100.png/ff4444/ffffff",
    description:
      "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
    price: "$1.45",
    promotion: false,
    featured: true,
    size: "16 oz",
    notes: "aliquam sit amet diam in magna bibendum imperdiet nullam",
  },
  {
    id: 24,
    name: "Americano",
    cafe_id: 2,
    img: "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
    description:
      "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus",
    price: "$1.43",
    promotion: true,
    featured: true,
    size: "16 oz",
    notes: "praesent blandit lacinia erat vestibulum sed magna at",
  },
  {
    id: 25,
    name: "Cortado",
    cafe_id: 13,
    img: "http://dummyimage.com/246x100.png/ff4444/ffffff",
    description:
      "diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere",
    price: "$0.98",
    promotion: false,
    featured: true,
    size: "16 oz",
    notes: "vitae nisl aenean lectus pellentesque eget nunc",
  }
]
