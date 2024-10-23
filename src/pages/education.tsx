import { Helmet } from 'react-helmet-async';

export default function Education() {
    return (
            <div className="content">
                <main>
                    <Helmet>
                        <title>Education | Resume</title>
                    </Helmet>
                    <section>
                        <h2>Education</h2>
                        <ul>
                            <li><h3>Boston University</h3><p>BA in Computer Science (2021-2025)</p></li>
                            <li><h3>EF Academy New York Campus</h3><p>2019-2021</p></li>
                            <li><h3>EF Academy Torquay Campus</h3><p>2018-2019</p></li>
                            <li><h3>Tianjin TEDA Maple Leaf International School</h3><p>2016-2018</p></li>
                        </ul>
                    </section>
                </main>
            </div>
    );
}
