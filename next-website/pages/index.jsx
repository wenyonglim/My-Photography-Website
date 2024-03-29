import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import NavbarNext from '@/components/NavbarNext';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import images from '../data/photos';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheng Lim Photography</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavbarNext />
      <Gallery images={images} />
      <Footer home={true} />
    </>
  );
}
