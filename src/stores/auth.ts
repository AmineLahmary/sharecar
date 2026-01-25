import { defineStore } from 'pinia'
import supabase from '@/lib/supabase'
import type { User } from '@/types/user'
import type { Profile } from '@/types/profile'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        profile: null as Profile | null,
        loading: false,
        error: null as string | null,
    }),

    actions: {
        async logIn(email: string, password: string) {
            this.loading = true
            this.error = null
            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password
                })
                if (error) throw error
                this.user = {
                    id: data.user.id,
                    email: data.user.email as string,
                    is_admin: data.user.user_metadata.is_admin as boolean
                }
            } catch (error: any) {
                this.error = error.message as string
            } finally {
                this.loading = false
            }
        },

        async logout() {
            await supabase.auth.signOut()
            this.user = null
        },

        async checkUser() {
            const { data } = await supabase.auth.getUser()
            if (data.user) {
                this.user = {
                    id: data.user.id,
                    email: data.user.email as string,
                    is_admin: data.user.user_metadata.is_admin as boolean
                }
            }
        },

        async checkProfile() {
            const { data } = await supabase.from('profiles').select('*').eq('user_id', this.user?.id)
            if (data) {
                this.profile = {
                    id: data[0].id,
                    full_name: data[0].full_name as string,
                    is_admin: data[0].is_admin as boolean
                }
            }
        }
    }
})