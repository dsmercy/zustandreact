import create from 'zustand';
import Services from "../services/Services";
import { toast } from "react-toastify";
import { devtools, persist } from 'zustand/middleware';

const useAccountStore = create(persist(devtools((set) => ({
    signedInUserData: null,
    signInUser: async (data) => {
        try {
            const userDto = await Services.Account.userlogin(data);
            if (userDto) {
                set((state) => ({
                    signedInUserData: [userDto, state.signedInUserData], 
                }));
            }
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    getUser: async (data) => {
        try {
            const userDto = await Services.Account.userlogin(data);
            set((state) => ({
                signedInUserData: [userDto, state.signedInUserData], 
            }));
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    signOut: () => {
        set(() => ({ signedInUserData: null }));
        // history.push('/');
    },
})), { name: 'account' }));


export default useAccountStore;
