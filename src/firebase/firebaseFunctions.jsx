import { collection, getDocs, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

const postsCollection = collection(db, "posts");

export const fetchPosts = async () => {
    const postSnapshot = await getDocs(postsCollection);
    const postList = postSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return postList;
};

export const getPostData = async (id) => {
    const postDoc = doc(postsCollection, id);
    const postSnapshot = await getDoc(postDoc);
    return { id: postSnapshot.id, ...postSnapshot.data() };
};

export const createPost = async (post) => {
    const newPostRef = doc(postsCollection, post.slug);
    await setDoc(newPostRef, post);
};
