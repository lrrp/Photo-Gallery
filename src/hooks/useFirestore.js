import { useState, useEffect } from "react";
import { projectFirestore } from "../config/fbConfig";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        // let documents = [];
        // snapshot.forEach((doc) =>
        //   documents.push({ ...doc.data(), id: doc.id })
        // );
        // setDocs(documents);
        setDocs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFirestore;
