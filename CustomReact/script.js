let userPrompt = prompt(
  "enter site you wanna visit. No typos/complex sht i have no validations"
);
//create object

const ReactElement = {
  type: "a",
  props: {
    href: `https://www.${userPrompt}.com/`,
    children: `Click me to visit ${userPrompt}`,
  },
};

//generate html

function generateHTML(ReactElement) {
  //get type and props

  const { type, props } = ReactElement;

  let element = `<${type}`;

  //iteration through each key

  for (let prop in props) {
    if (prop !== "children") {
      element += ` ${prop}= "${props[prop]}"`;
    }
  }

  element += `>${props.children}<${type}/>`;
  //   console.log(element);

  return element;
}

// generateHTML(ReactElement);

//render function

function customRenderHTML(ReactElement, targetElement) {
  const htmlString = generateHTML(ReactElement);
  targetElement.innerHTML = htmlString;
}

let root = document.getElementById("root");

customRenderHTML(ReactElement, root);
