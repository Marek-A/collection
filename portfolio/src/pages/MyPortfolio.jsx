import "../components/css/MyPortfolio.css"
import "../components/css/Styler.css"
import website1 from "../assets/img/dummies/dummy.jpg"
import website2 from "../assets/img/dummies/dummy2.jpg"
import website3 from "../assets/img/dummies/dummy3.jpg"
import website4 from "../assets/img/dummies/dummy4.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useTranslation } from "react-i18next";

function MyPortfolio({ r1 }) {

    const { t } = useTranslation();

    const handleClick = () => {
        window.location.assign("https://milygear.web.app/");
    };

    return (
        <div ref={r1} className="myportfolio">
            <br /><br />
            <h3 id='portfolio-title'>{t("TITLE-PORTFOLIO")}</h3>
            <section className="portfolio-grid">
                <Card bg="dark" border="muted" text="light" style={{ width: '25rem', height: '27rem' }}>
                    <Card.Img variant="top" onClick={handleClick} src={website1} alt="Website 1 Thumbnail" />
                    <Card.Body>
                        <Card.Title className="project-card-title">Mily Gear</Card.Title>
                        <Card.Text className="project-card-text">
                            This React webstore for Military gear was built during a comprehensive developer course.
                        </Card.Text>
                        <Button variant="warning" target="_blank" href='https://github.com/Marek-A/collection/tree/main/webshop'>Source code & documendation</Button>
                    </Card.Body>
                </Card>

                <Card bg="dark" border="muted" text="light" style={{ width: '25rem', height: '27rem' }}>
                    <Card.Img variant="top" onClick={handleClick} src={website2} alt="Website 1 Thumbnail" />
                    <Card.Body>
                        <Card.Title className="project-card-title">Bakery Shop</Card.Title>
                        <Card.Text className="project-card-text">
                            The Bakery Shop website was a test task for Nortal University 2021, done with React.
                        </Card.Text>
                        <Button variant="warning" target="_blank" href='https://github.com/Marek-A/React-Course/tree/master/bakery-shop'>Source code & documendation</Button>
                    </Card.Body>
                </Card>

                <Card bg="dark" border="muted" text="light" style={{ width: '25rem', height: '27rem' }}>
                    <Card.Img variant="top" onClick={handleClick} src={website3} alt="Website 1 Thumbnail" />
                    <Card.Body>
                        <Card.Title className="project-card-title">(Upcoming) Personal trainer website</Card.Title>
                        <Card.Text className="project-card-text">
                            Upcoming real project, will be built with React
                            <br />
                            <br />
                        </Card.Text>
                        <Button variant="warning" target="_blank" href='x'>In-progress</Button>
                    </Card.Body>
                </Card>

                <Card bg="dark" border="muted" text="light" style={{ width: '25rem', height: '27rem' }}>
                    <Card.Img variant="top" onClick={handleClick} src={website4} alt="Website 1 Thumbnail" />
                    <Card.Body>

                        <Card.Title className="project-card-title">(Upcoming) Firearms store website</Card.Title>
                        <Card.Text className="project-card-text">
                            Upcoming real project, will be built with React
                            <br />
                            <br />
                        </Card.Text>
                        <Button variant="warning" target="_blank" href='x'>In-progress</Button>
                    </Card.Body>
                </Card>

            </section>
        </div>
    )
}

export default MyPortfolio