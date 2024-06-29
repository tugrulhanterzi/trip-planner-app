import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { db } from './firebase';

export const deleteDocument = async (collection: string, docId: string) => {
  const docRef = doc(db, collection, docId);

  try {
    const res = await deleteDoc(docRef);
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateDocument = async (collection: string, docId: string, data: any) => {
  const docRef = doc(db, collection, docId);

  try {
    const res = await setDoc(docRef, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const addDocument = async (customId: string, collectionName: string, data: any) => {
  try {
    const res = await setDoc(doc(collection(db, collectionName), customId), data);
    return { id: customId, res };
  } catch (error) {
    throw error;
  }
};

export const getDocument = async (collection: string, docId: string) => {
  const docRef = doc(db, collection, docId);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('No such document!');
    }
  } catch (error) {
    throw error;
  }
};

export const getDocuments = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const docs = querySnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });

    return docs;
  } catch (error) {
    throw error;
  }
};
