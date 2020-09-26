
const connection = new WebSocket("ws://localhost:8080");
const button = document.querySelector("#send");

connection.onopen = (event) => {
    console.log("Websocket is open");
};

connection.onclose = (event) => {
    console.log("Websocket is closed");
};

connection.onerror = (event) => {
    console.log("Websocket error", event);
};

connection.onmessage = (event) => {
    const chat = document.querySelector("#chat");
    chat.innerHTML += event.data;
    console.log(event.data);
}; 

button.addEventListener("click", () => {
    const message = document.querySelector("#message");
    const data = `<p> ${message.value} </p>`;
    console.log(data);
    connection.send(data);
    message.value = "";
});