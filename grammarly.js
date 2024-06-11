const body = document.getElementsByTagName("body")[0];

const logosvg = `
  <svg
    height="2500"
    width="2500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 92 92"
  >
    <circle cx="46" cy="46" fill="#2bb673" r="46" />
    <path
      d="M55.1 52.2c-1.9 0-3.4 1.7-3.1 3.7.3 1.5 1.7 2.5 3.2 2.5H60l2.8-.4c-4.5 6.6-12.2 9.6-20.7 8.2-6.9-1.1-12.8-5.8-15.3-12.3-5.7-14.8 5.1-29 19.2-29 7.3 0 13.8 4.3 17.5 9.5v.1c1 1.4 2.9 1.8 4.3.8 1.3-.9 1.7-2.7.9-4.1-5.1-8-14.3-13.1-24.6-12.4C30.7 19.9 19.8 30.9 19 44.4c-.9 15.7 11.5 28.4 27 28.4 8.1 0 15.4-3.5 20.3-9.3l-.6 3.3v3c0 1.5 1 2.9 2.5 3.2 2 .4 3.7-1.2 3.7-3.1V52.2z"
      fill="#fff"
    />
  </svg>`;

const xsvg = `
  <svg
    fill="#fffff"
    height="800px"
    width="800px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 460.775 460.775"
    xml:space="preserve"
  >
    <path
      d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
    />
  </svg>
`;

const createbox = (title) => {
  const board = document.createElement("div");
  const header = document.createElement("div");

  const text = document.createElement("div");
  const boxbody = document.createElement("div");
  const button = document.createElement("div");
  const headerText = document.createElement("p");
  
  board.className = "board";
  header.className = "header";
  text.classname = "text";
  boxbody.classname = "boxbody";
  button.className = "button";

  headerText.innerText = title;
  text.innerText = "Review your English writing for mistakes";
  text.innerText = "Write clearly in English with no mistakes. Try our free writing app!";

  header.appendChild(headerText);
  board.appendChild(header);
  body.appendChild(board);
  board.appendChild(text);
};

createbox("Grammarly");
