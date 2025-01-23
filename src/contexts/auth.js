import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../pages/firebaseConnect";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigation();

  useEffect(() => {
    async function loadStorage() {
        const storageUser = await AsyncStorage.getItem('Auth_user');
        if(storageUser) {
            setUser(JSON.parse(storageUser));
            setLoadingAuth(false);
        }else{
            setUser(null);
        }
    }
    loadStorage();
    setLoading(false);
  }, []);

    async function signUp(nome, email, password, confirmPassword) {
        setLoadingAuth(true);
        if (password !== confirmPassword) {
            alert('Erro, As senhas não conferem');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: nome });
            alert('Usuário criado com sucesso');

            setLoadingAuth(false);
            navigate.navigate('SignIn');

        } catch (error) {
            alert('Erro ao cadastrar', error.message);
            setLoadingAuth(false);
        }
        
    }

    async function signIn(email, password) {
        if(email === '' || password === '') {
            alert('Preencha todos os campos');
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user);
            navigate.navigate('Home');
            await AsyncStorage.setItem('Auth_user', JSON.stringify(user));
        } catch (error) {
            if(error.code === 'auth/user-not-found') {
                alert('Usuário não encontrado');
                return
            }else if(error.code === 'auth/invalid-credential'){
                alert('Email ou senha incorretos');
                return
            }
        }
    }

    async function signOut() {
        await auth.signOut();
        await AsyncStorage.clear()
        setUser(null);
    }
  return (
    <AuthContext.Provider value={{ signed: !! user, user, signUp , signIn , signOut , loadingAuth , loading}}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthProvider;