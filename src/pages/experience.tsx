import { Helmet } from 'react-helmet-async';

export default function Experience() {
    return (
        <div className="content">
            <main>
                <Helmet>
                    <title>Experience | Resume</title>
                </Helmet>
                <section>
                    <h2>Work Experience</h2>
                    <ul>
                        <li>
                            <p><strong>Zojo-ji</strong></p>
                            <h3>Omamori Salesperson</h3>
                            <p>Tokyo, Japan</p>
                            <p className="italic">January 2023</p>
                            <ul>
                                <li>Assisted visitors and customers in selecting and purchasing Omamori amulets, explaining their significance and benefits.</li>
                                <li>Maintained inventory of Omamori amulets, ensuring availability and organization.</li>
                                <li>Handled cash transactions and operated a point-of-sale (POS) system efficiently and accurately.</li>
                                <li>Collaborated with colleagues to ensure a smooth and pleasant visitor experience.</li>
                            </ul>
                        </li>
                        <li>
                            <p><strong>Cerulean Tower Tokyu Hotel</strong></p>
                            <h3>Hotel Banquet Server</h3>
                            <p>Tokyo, Japan</p>
                            <p className="italic">May 2022 - August 2022</p>
                            <ul>
                                <li>Provided exceptional food and beverage service during banquets, conferences, and events held in the hotel's banquet facilities.</li>
                                <li>Set up banquet rooms according to event specifications, including table arrangements, linens, and table settings.</li>
                                <li>Took and accurately recorded guests' orders, ensuring prompt and efficient service.</li>
                                <li>Served plated meals and facilitated buffet-style service, maintaining a high level of professionalism and attention to detail.</li>
                                <li>Monitored tables, cleared empty plates and glasses, refilled water glasses, and fulfilled guest requests.</li>
                                <li>Communicated effectively with banquet captain, event coordinators, and kitchen staff to ensure seamless event execution.</li>
                                <li>Collaborated with team members to ensure cleanliness and organization of the banquet space.</li>
                                <li>Demonstrated exceptional customer service, addressing guest concerns and requests promptly and courteously.</li>
                                <li>Adhered to health and safety regulations, maintaining a clean and safe environment.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};
