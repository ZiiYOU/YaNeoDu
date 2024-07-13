import { User } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  token: null | string;
}
interface AuthAction {
  login: (token: string, user: User) => void;
  logout: () => void;
}
const defaultUser: User = {
  id: '',
  user_id: '',
  password: '',
  name: '',
  nickname: '',
  birth: '',
  admin: false
}
const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: defaultUser,
      token: null,
      login: (token, user) => {
        if (token) {
          set({ token, user, isAuthenticated: true })
          console.log(token)
          console.log(user)
        } else {
          alert('로그인불가')
          console.log(token)
          console.log(user)
        }
      },
      logout: () => {
        set({ token: null, user: defaultUser, isAuthenticated: false })
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;