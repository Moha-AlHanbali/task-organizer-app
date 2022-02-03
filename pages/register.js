
import Head from 'next/head'
import Signup from '../components/Signup';

export default function Register() {
    return (
        <div>
            <Head>
                <title>Task Organizer Registration </title>
                <meta name="description" content="Generated by create next app" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <Signup />
            </main>

            <footer>

            </footer>
        </div>
    );
}
