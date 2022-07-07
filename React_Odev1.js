import axios from "axios";
import fetch from "node-fetch";



async function getData(Number){

    const user = await (
    await fetch("https://jsonplaceholder.typicode.com/users/" + Number)
    ).json();
    const post = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/"+ Number)
    ).json();

    console.log(user);
    console.log(post);
}

getData(1);