import CardMahasiswa from "@/components/CardMahasiswa";
import supabase from "../../../../../utils/supabase";

export const revalidate = 0

export default async function GetMhsByNimSemester({ params }) {
    const {nim, semester} = params
    const {data: nilai, error} = await supabase.from("nilai").select(`
        nilai,semester,
        matakuliah(kdmk,matakuliah,sks)
    `).eq('nim', nim).eq('semester', semester);
    if (error) {
        console.log(error);
    }
    console.log(nilai);

    const { data: mahasiswa, err} = await supabase.from("mahasiswa").select(`
        *
    `).eq('nim', nim);

    return (
        <>
            <p>NIM : {nim}</p>
            <p>Semester : {semester}</p>
        </>
    )
}
