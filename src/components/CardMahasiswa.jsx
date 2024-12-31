"use client";
import {CldImage} from 'next-cloudinary'
import { useState } from 'react';
import Link from "next/link"

export default function CardMahasiswa(props) {
    const {nim, nama, angkatan, prodi, foto} = props;
    const [angka, setAngka] = useState(0)
    const handleClick = () => {
        setAngka(angka + 1)
    }

    return (
        <div className='p-2 m-2 border border-slate-300 rounded-lg grid justify-items-center text-slate-700'>
        <CldImage className='rounded-full'
            src={foto} // Use this sample image or upload your own via the Media Explorer
            width="75" // Transform the image: auto-crop to square aspect_ratio
            height="75"
            crop={{
                type: 'auto',
                source: true
            }}
        />
        <h1 className='text-xl font-semibold'>{nama}</h1>
            <p>NIM      : {nim}</p>
            <p>Angkatan : {angkatan}</p>
            <p>Prodi    : {prodi}</p>
            <Link className="text-red-900 underline hover:text-blue-900 mt-2" 
                href={`/nilai/${nim}`}>
                Lihat Nilai
            </Link>
        </div>
    );
}
