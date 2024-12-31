'user server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "./supabase/server"

export async function login(formData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.atuh.signinWithPassword(data)
    if (error) {
        if (error.message === 'Invalid login credentials') {
            redirect('/login?message=Email atau Password salah')
        }
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async functionn signup(formdata) {
    cons supabase 
}