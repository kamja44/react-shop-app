"use client";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const useFetchDocuments = (collectionName, arg) => {
  const [documents, setDocuments] = useState([]);

  const getDocuments = useCallback(async () => {
    const q = query(
      collection(db, collectionName),
      where(arg[0], arg[1], arg[2])
    );
    const querySnapshot = await getDocs(q);
    let documentsArray = [];
    querySnapshot.forEach((doc) => {
      documentsArray.push(doc.data());
    });

    setDocuments(documentsArray);
  }, [collectionName, arg[0], arg[1], arg[2]]);

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);
  return { documents };
};

export default useFetchDocuments;
