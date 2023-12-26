import {create} from 'zustand';
import Services from "../services/Services";
import { toast } from "react-toastify";
import { devtools, persist } from 'zustand/middleware';

const useAccountStore = create(persist(devtools((set) => ({
    signedInUserData: null,
    jobSeekerData: null,
    signInUser: async (data) => {
        try {
            const userDto = await Services.Account.userlogin(data);
            if (userDto) {
                set((state) => ({
                    signedInUserData: [userDto, state.signedInUserData], 
                }));
            }
            return userDto;
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    getUser: async () => {
        try {
            const jobSeeker = await Services.Account.getJobSeeker();
            set(() => ({jobSeekerData: jobSeeker}));
        } catch (error) {
            return Promise.reject({ error: error.data });
        }
    },
    signOut: () => {
        set(() => ({ signedInUserData: null }));
        localStorage.removeItem('account');
        localStorage.removeItem('token');
        // history.push('/');
    },
})), { name: 'account' }));


export default useAccountStore;
