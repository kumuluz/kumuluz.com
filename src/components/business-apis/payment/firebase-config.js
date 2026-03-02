import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
    apiKey: "AIzaSyBvYRkb16g0Zm5IqRy84AU9N0e6GNUiQyE",
    authDomain: "kumuluz-buy.firebaseapp.com",
    databaseURL: "https://kumuluz-buy.firebaseio.com",
    projectId: "kumuluz-buy",
    storageBucket: "kumuluz-buy.appspot.com",
    messagingSenderId: "150544649135"
};

const fire = initializeApp(config);
const database = getDatabase(fire);

export { database };
export default fire;
