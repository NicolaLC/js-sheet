const fonts = {
  main: "'B612 Mono', monospace",
  sizes: {
    h1: "2rem",
    h2: "1.75rem"
  }
};

const colors = {
  main: "#5f27cd",
  secondary: "#48dbfb"
}

const layoutProps = {
  itemsMargin: "1rem 0"
}

const headerHeight = "10rem";

const getBodyHeight = () => {
  return `calc(100% - ${headerHeight})`;
}

const stylesheets = {
  "root": {
    "selector": ".PageWrapper",
    "align": "column",
    "width": "100%",
    "height": "100%",
    "background": colors.main,
    "font-family": fonts.main,
    "childrens": [
      {
        "selector": ".Header",
        "color":"white",
        "width":"100%",
        "height":headerHeight,
        "align":"center",
        "background": "#48dbfb"
      },
      {
        "selector": ".Body",
        "color":"white",
        "width":"100%",
        "height": getBodyHeight(),
        "align":"top left column",
        "padding": "2rem"
      },
      {
        "selector": "h1",
        "font-size": fonts.sizes.h1,
        "margin": layoutProps.itemsMargin
      },
      {
        "selector": "h2",
        "font-size": fonts.sizes.h2,
        "margin": layoutProps.itemsMargin
      }
    ]
  }
}

module.exports = {
  stylesheets
};