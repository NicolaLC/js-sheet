/**
 * GENERICS EXAMPLE
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc   handles generic html tags
 */

const generics = [
  {
    selector: 'h1',
    fontSize: '3rem',
    color: 'lawngreen'
  },
  {
    selector: 'h5',
    fontSize: '1rem',
    color: 'white',
    children: [
      {
        selector: 'a',
        color: 'lawngreen',
        textDecoration: 'none'
      }
    ]
  }
];

module.exports = {
  generics
};
