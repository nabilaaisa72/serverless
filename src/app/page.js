import CardMahasiswa from "@/components/CardMahasiswa";
import SearchForm from "@/components/SearchForm";
import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation"
import SignoutButton from "@/components/LogoutButton";

export const revalidate = 0;

export default async function Home() {
  const supabase = await createClient()

  const {data, error: authError } = await supabase.auth.getUser()
  console.log(data);

  if (authError || !data?.user) {
    redirect('/login')
  }

  const { data: mahasiswa, error } = await supabase.from("mahasiswa").select().order("id",{ ascending: false });
  console.log(mahasiswa);
  
  if (error) {
    console.log(error.message);
  }

  function handleClick() {
    setAngka(angka + 1)
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-700 ml-2"> Daftar Mahasiswa</h1>
      <SearchForm/>
      <div className="flex p-4"> 
        {mahasiswa && mahasiswa.map((mhs,idx) => (
          <CardMahasiswa
            key = {idx}
            nim = {mhs.nim}
            nama = {mhs.nama}
            angkatan = {mhs.angkatan}
            prodi = {mhs.prodi}
            foto = {mhs.foto}
          />
        ))}
      </div>
      <SignoutButton />
    </div>
  )
}
