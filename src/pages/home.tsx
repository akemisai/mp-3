import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div className="wrapper">
            <div className="content">
            <Helmet>
                <title>Home | Resume</title>
            </Helmet>
                <main>
                    <section>
                        <h2>Home</h2>
                        <img src="/pic.jpg" alt="Picture of Akemi Sai" width="300" />
                        <p>My name is Akemi Sai, and I am a full-time undergraduate student at Boston University studying Computer Science</p>
                        <h3>Contact Information</h3>
                        <p>Email: akemisai@bu.edu</p>
                        <p>Phone: 857-327-0277</p>
                    </section>
                </main>
            </div>
        </div>
    );
}
